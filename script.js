(function () {
	"use strict";

	var root = document.documentElement;
	root.classList.remove("no-js");
	root.classList.add("js");

	var header = document.querySelector("[data-header]");
	var toggle = document.querySelector("[data-nav-toggle]");
	var nav = document.querySelector("[data-nav]");

	function updateHeader() {
		if (!header) {
			return;
		}
		header.classList.toggle("is-scrolled", window.scrollY > 8);
	}

	updateHeader();
	window.addEventListener("scroll", updateHeader, { passive: true });

	function setNav(open) {
		if (!toggle || !nav) {
			return;
		}
		toggle.setAttribute("aria-expanded", open ? "true" : "false");
		toggle.classList.toggle("is-open", open);
		nav.classList.toggle("is-open", open);
	}

	if (toggle && nav) {
		toggle.addEventListener("click", function () {
			setNav(toggle.getAttribute("aria-expanded") !== "true");
		});

		nav.addEventListener("click", function (event) {
			if (event.target.closest("a")) {
				setNav(false);
			}
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
				setNav(false);
				toggle.focus();
			}
		});

		document.addEventListener("click", function (event) {
			var isOpen = toggle.getAttribute("aria-expanded") === "true";
			if (isOpen && !nav.contains(event.target) && !toggle.contains(event.target)) {
				setNav(false);
			}
		});

		window.addEventListener("resize", function () {
			if (window.innerWidth > 820) {
				setNav(false);
			}
		});
	}

	var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (reduceMotion || !("IntersectionObserver" in window)) {
		revealItems.forEach(function (item) {
			item.classList.add("is-visible");
		});
	} else {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.12,
			rootMargin: "0px 0px -40px 0px"
		});

		revealItems.forEach(function (item) {
			observer.observe(item);
		});
	}
})();
