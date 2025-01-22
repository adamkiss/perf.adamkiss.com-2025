module.exports = {
	description: "AK / BS Sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://adamkiss.com/",
        "https://bestshot.sk/",
		"https://rsvp.sk/",
		"https://2024.besttour.sk/",
		"https://chcemvino.sk/",
		"https://chcemvinonaevent.sk/",
	]
};