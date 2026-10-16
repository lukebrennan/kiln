/* Kiln — open/closed status and today's hours (placeholder hours). */
(() => {
  "use strict";

  const HOURS = {
    Mon: ["07:30", "16:30"], Tue: ["07:30", "16:30"], Wed: ["07:30", "16:30"],
    Thu: ["07:30", "16:30"], Fri: ["07:30", "16:30"],
    Sat: ["08:30", "16:00"], Sun: ["08:30", "16:00"],
  };
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toMin = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };

  function londonNow() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    return { day: get("weekday"), min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function statusFor({ day, min }) {
    const [open, close] = HOURS[day].map(toMin);
    if (min >= open && min < close) return { open: true, text: `Open now, until ${HOURS[day][1]}` };
    if (min < open) return { open: false, text: `Closed. Opens today at ${HOURS[day][0]}` };
    const next = DAYS[(DAYS.indexOf(day) + 1) % 7];
    return { open: false, text: `Closed. Opens tomorrow at ${HOURS[next][0]}` };
  }

  function paint() {
    const now = londonNow();
    const s = statusFor(now);
    document.querySelectorAll("[data-status]").forEach((el) => {
      el.dataset.open = String(s.open);
      el.textContent = s.text;
    });
    document.querySelectorAll("[data-days]").forEach((row) => {
      row.classList.toggle("today", row.dataset.days.split(" ").includes(now.day));
    });
  }

  paint();
  setInterval(paint, 60000);
})();
