import React from "react";

// TEMPLATE:

// function article_X() {
// 	return {
// 		date: new Date("YYYY-MM-DD"), // Use this to schedule visibility
// 		title: "Your Blog Post Title Here",
//         published: false,
//         articleNumber: 0,
// 		description: "Short summary that appears in the blog index or card view.",
// 		keywords: [
// 			"Keyword One",
// 			"Keyword Two",
// 			"Your Name",
// 			"Topic Tag",
// 		],
// 		style: `
//             .article-content {
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             }
// 		`,
// 		body: (
// 			<React.Fragment>
// 				<div className="article-content">
// 					<p>
// 						Your first paragraph goes here. This could be your hook or personal intro.
// 					</p>

// 					<p>
// 						<b>Section Heading</b><br />
// 						Supporting details or story. You can include:
// 						<ul>
// 							<li>Unordered lists</li>
// 							<li><code>inline code samples</code></li>
// 							<li>Bold text or line breaks as needed</li>
// 						</ul>
// 					</p>

// 					<p>
// 						<b>Another Section</b><br />
// 						Add more context, examples, or lessons learned.
// 					</p>

// 					<p>
// 						<b>Final thoughts</b><br />
// 						Close it out with a takeaway or personal reflection.
// 					</p>
// 				</div>
// 			</React.Fragment>
// 		),
// 	};
// }

function article_1() {
	return {
		date: new Date("2025-03-23"),
		title: "Hesitating? Or waiting for the right moment?",
		published: true,
        articleNumber: 1,
		description:
			"My path into frontend development hasn't been linear — and that's okay. I write a bit about why I didn't switch careers right after studying, and what I gained by waiting until I felt the time was right.",
		keywords: [
			"Career switch",
			"Frontend developer journey",
			"General Assembly grad",
			"Career transition",
			"Dave Donnelly",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						After finishing the General Assembly Software Engineering Intensive in 2022, I didn't jump into a dev job straight away. I felt a lot of pressure to — but
						honestly looking back now, I'm glad I didn't.
					</p>
					<p>
						Like a lot of people who move into tech from a different
						career, my journey has been more of a slow build than a
						sudden switch. While I was always drawn to
						problem-solving and always interested in systems, it
						wasn't until a few years ago that I started seriously
						thinking about coding as a career.
					</p>
					<p>
						<b>Necessity: the mother of invention</b>
						<br />
						The first time I did any form of 'programming' to solve
						a problem, I was working in a school office at UNSW
						around 10 years ago. We had an increasing amount of
						internship applications to process but no official
						system to manage them. We needed something that could bulk manage applications, something customisable, but the team who would usually work with
						us to build a solution were already overworked and unable to help. Our office had a
						licence for FileMaker Pro, so I decided I'd try my hand
						at using FileMaker to build a database to collect &
						process applications, and confirm outcomes for our
						students' internships.
					</p>
					<p>
						I spent weeks learning how to use the system in my spare
						time, trying to figure out the best way to structure the
						database, to build record management processes and to
						set up automated email templates in an effort to make it
						quick, easy to use and standardised. I eventually put
						together something that, looking back, was admittedly a
						bit janky on the inside, but was still useful & solved our
						problem at the time. At this point though, it was still
						not something I thought I could make a career out of - I
						was just trying to make things easier for my workmates.
					</p>
					<p>
						<b>The spark</b>
						<br />
						Fast forward to my time at City, University of London
						where I was a course administator & looking for a role
						change. A role in the student systems team came up and
						my manager recommended that I go for it.
						Despite not having a background in systems at the time,
						by some miracle my application was successful.
					</p>
					<p>
						I started slow, picking up small bits of development —
						tweaking code, writing SQL, improving how we presented
						data to end users. The student information system we
						used (SITS:Vision, by Tribal) had a purpose-built programming language for
						custom-building frontend pages/applications to help
						manage the backend records. While it wasn't always
						directly using HTML/CSS/JavaScript, I remember getting
						hooked on that feeling of making something work better
						through code. And to my surprise, I picked it up fast.
						For the first time in my working life I felt like I'd
						found something I loved to do, that I could actually do
						well.
					</p>
					<p>
						<b>Diving deeper</b>
						<br />
						When we moved back to Sydney in 2021, I knew I wanted to
						keep exploring that interest. I found the General
						Assembly Software Engineering Intensive and dove in
						headfirst. 20 hours of study per week (more during project weeks) on top of full
						time work was definitely a struggle but my heart sang
						during every moment of it! It confirmed for me that this
						wasn't just a curiosity — it was something I genuinely
						wanted to do long-term.
					</p>
					<p>
						At the end of the six months, I finished the course but
						I didn't leave my UNSW job straight away. I could give many
						reasons which, despite being legitimate sometimes feel like
						excuses, but ultimately I think it just came down to
						timing.
					</p>
					<p>
						We were mid-way through a major student-facing system
						rollout, and I'd been part of that project since the
						business case phase. I wanted to see it through. I was
						also stepping into a new role leading a team for the
						first time. It gave me a chance to build skills in
						people management, mentoring, and project delivery —
						things I knew would be valuable no matter where I ended
						up. The project also gave me an opportunity to be a
						major part of rolling out a SaaS product from start to
						finish, from the client's perspective - an opportunity I
						knew I wouldn't necessarily get once I switched to being
						a dev, and is something I think gives me unique
						insights.
					</p>
					<p>
						<b>Why now</b>
						<br />
						With the rollout nearly complete and my team shifting into BAU, it finally feels like the right time to make
						the leap. I've built up my frontend skills, I'm
						continually working on my portfolio of projects, and I'm
						ready to bring both my coding abilities and my years of
						system and stakeholder experience to a full-time
						developer role.
					</p>
					<p>
						If there's one thing I've learned, it's that not every
						career shift needs to happen in a rush. Sometimes
						playing the long game lets you bring more to the table.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: new Date("2025-04-06"),
		title: "A web dev trapped in a business consultant's body",
		published: true,
        articleNumber: 2,
		description:
			"Before switching careers, I was already using coding to solve problems in my day job. Here are a few ways that early dev knowledge made an impact — and confirmed I was on the right path.",
		keywords: [
			"Early coding projects",
			"SQL reporting",
			"Jira formatting tool",
			"JavaScript browser extension",
			"career switch to developer",
			"Dave Donnelly",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						During the last couple of years working at UNSW, I
						found myself reaching for code more and more — not
						because it was in my job description, but because it
						just made things easier.
					</p>
					<p>
						Before I ever had “developer” in my title, I was already
						writing scripts, building small tools, and using
						technical shortcuts to make work more efficient for me
						and my team. Here are a few moments where those skills
						came in handy.
					</p>
					<p>
						<b>
							1. Writing SQL reports to investigate data inconsistencies within our integration
						</b>
						<br />
						Using Oracle SQL, I frequently built reports that helped identify
						inconsistencies between the data generated in our Student Information System (SIS) and the data displayed in our new system. These inconsistencies highlighted an issue with our data not being ingested via the APIs provided by the vendor and allowed us to provide ample examples so that the vendor could investigate and deliver a fix for us.
					</p>
					<p>
						<b>
							2. Building a webpage to format Jira issue keys for
							bulk editing
						</b>
						<br />
						We were using Jira to track the manual build of our program rule structures in our new progression checker/study planner system. As manager of the team, I was regularly needing to bulk edit issues in Jira,
						which required pasting long lists of issue keys — but
						they had to be wrapped in quotes and comma-separated.
						Instead of doing that manually (and messing it up half
						the time), I made a little webpage where you paste a
						list and it instantly formats it. It was simple, but
						saved me vast amounts of time.
					</p>
					<p>
						<b>
							3. Using JavaScript in a browser extension to hide
							student data during live demos
						</b>
						<br />
						When we were demoing our new progression checker/study planner system to external
						stakeholders or public audiences, we needed to show real
						functionality — without exposing real student data. I
						wrote some JavaScript that plugged into a browser
						extension to blank out names, IDs, and other identifiers
						on the fly. It let us give confident, secure demos
						without relying on test environments.
					</p>
					<p>
						None of these were full-scale applications. They were
						small, scrappy solutions to very real problems. But each
						time I built one, it gave me more confidence — and
						reinforced the idea that this was the kind of work I
						wanted to be doing full-time.
					</p>
					<p>
						It wasn't just about learning to code — it was about
						learning to think like a developer. Spot the friction,
						build a fix, improve the process. Even before the
						official title, that mindset had already started to take
						hold.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: new Date("2025-04-20"),
		title: "What I'm bringing with me switching to frontend dev",
		published: true,
        articleNumber: 3,
		description:
			"As I wrap up a long-term role in university systems, I've been reflecting on the skills I'm carrying with me into frontend development — from problem-solving to working with constraints and collaborating across teams.",
		keywords: [
			"Career switch to frontend",
			"Transferable skills",
			"From higher ed to dev",
			"Dave Donnelly",
			"UNSW projects",
			"Frontend mindset",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						For the last few years, I've been working in student
						systems at UNSW — leading a team, rolling out a major
						new product, and solving all kinds of system-related
						challenges along the way. It's been a rewarding role,
						but now that the project is nearly complete and my time
						there is winding down, I'm finally making the move I've
						been preparing for: transitioning into frontend
						development full-time.
					</p>
					<p>
						While I've been learning web development in the
						background — building projects in React, refining my
						JavaScript, diving into HTML and CSS — I've also been
						picking up skills in my day job that I know I'll carry
						into this next chapter. Here are a few of the things I'm
						bringing with me:
					</p>

					<p>
						<b>1. A problem-solving mindset</b>
						<br />
						Much of my current role has involved identifying
						problems, untangling processes, and figuring out where
						things are going wrong. Sometimes that's technical,
						sometimes it's data-related, and sometimes it's just
						about improving how people interact with systems.
						<br />
						<br />
						That same mindset is at the heart of frontend
						development: understanding what the user needs, working
						through edge cases, and building something that's both
						functional and clear.
					</p>

					<p>
						<b>2. Working with (and around) constraints</b>
						<br />
						Anyone who's worked in large organisations knows there
						are always limits — whether it's legacy systems, rigid
						data structures, or vendor platforms that don't always
						behave as you'd like. I've learned to work within those
						boundaries, finding practical solutions that still
						deliver value.
						<br />
						<br />
						From what I've already seen in frontend projects, that
						experience translates well — especially when working
						with design systems, third-party APIs, or complex UI
						requirements.
					</p>

					<p>
						<b>3. Translating between people and systems</b>
						<br />
						As a senior business consultant, I've often been the
						person connecting the dots between different groups:
						analysts, product owners, developers, end users. I've
						written Jira tickets, run demos, gathered feedback, and
						translated business needs into actionable features.
						<br />
						<br />
						Frontend developers sit at that same intersection —
						bridging user needs and technical implementation. I'm
						comfortable in that space and genuinely enjoy working
						across disciplines to bring ideas to life.
					</p>

					<p>
						<b>4. A focus on maintainability and documentation</b>
						<br />
						I've seen how messy things can get when systems aren't
						documented or when one-off fixes become permanent
						without proper context. I've always made a point of
						leaving behind clear notes, structured documentation,
						and code that others can follow.
						<br />
						<br />
						Now, as I write more frontend code, that mindset sticks
						— writing clean, reusable components and documenting my
						thinking along the way.
					</p>

					<p>
						<b>5. Comfort with ambiguity</b>
						<br />
						Project timelines shift. Requirements change.
						Documentation is sometimes out of date (or missing
						altogether). That's been a consistent reality in my
						current role, and I've learned to navigate it — asking
						questions, tracking down the information I need, and
						figuring things out as I go.
						<br />
						<br />
						That comfort with ambiguity will be just as useful in a
						dev team — especially when exploring unfamiliar
						codebases or adapting to evolving features.
					</p>

					<p>
						<b>Looking ahead</b>
						<br />
						With the new product fully rolled out, and the project winding down, the timing finally feels right.
						I've been building up my frontend skills, working on
						projects I'm proud of, and I'm excited to shift gears
						into a role where I can do that every day.
						<br />
						<br />
						The transition is already underway — and I'm looking
						forward to joining a team where I can grow, contribute,
						and keep learning as a developer.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: new Date("2025-05-04"),
		title: "Getting comfortable with CSS (eventually)",
		published: false,
        articleNumber: 4,
		description:
			"Of all the parts of frontend development, CSS has taken me the longest to feel confident in. Here's what made it so tricky — and how slow, steady practice helped it start to make sense.",
		keywords: [
			"CSS learning journey",
			"Frontend layout struggles",
			"Flexbox and Grid",
			"Dave Donnelly",
			"Learning frontend dev",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						If there's one part of frontend development that's taken
						me the longest to feel confident in, it's CSS.
					</p>
					<p>
						I remember early on, I could build out the logic of a
						React app just fine — state, props, conditionals, no
						problem. But then I'd try to lay it out nicely and
						suddenly everything would break. Margins wouldn't
						behave, things wouldn't align, text would overflow
						weirdly. The layout I had in my head rarely made it to
						the screen.
					</p>
					<p>
						At times, it felt like magic — and not the good kind.
					</p>

					<p>
						<b>Why CSS felt tricky</b>
						<br />
						The thing about CSS is that it's not really like coding
						in the traditional sense. There's no control flow or
						logic. It's all about layout rules, specificity,
						inheritance, and a cascade that sometimes behaves in
						ways that feel anything but intuitive.
						<br />
						<br />
						And on top of that, there's about ten ways to do
						everything — flexbox, grid, floats, absolute positioning
						— each with their own quirks and use cases.
						<br />
						<br />
						I'd make one change to fix something and break three
						other things in the process. So yeah, it took a while.
					</p>

					<p>
						<b>What helped (eventually)</b>
						<br />
						The truth is, there wasn't one moment where it suddenly
						clicked. It didn't “fall into place” with a single
						project the way JavaScript sometimes does.
						<br />
						<br />
						Instead, I just kept at it. Little by little.
						<ul>
							<li>
								I rebuilt components from scratch instead of
								copying styles.
							</li>
							<li>
								I tried to recreate designs I liked just for
								practice.
							</li>
							<li>
								I leaned on browser dev tools to inspect what
								was actually happening.
							</li>
							<li>
								I started small and built layouts from the
								inside out.
							</li>
							<li>
								I got more comfortable reading CSS I didn't
								write.
							</li>
						</ul>
						Over time, I stopped fighting the layout and started
						understanding it. I began to get a feel for how flex and
						grid behave. I learned when to wrap elements, when to
						use <code>gap</code> instead of <code>margin</code>, and
						how <code>position: relative</code> can be your best
						friend or worst enemy.
					</p>

					<p>
						<b>Where I'm at now</b>
						<br />
						I won't pretend I've mastered CSS. It still throws me
						sometimes. But I'm not scared of it anymore — and that's
						a big shift.
						<br />
						<br />
						These days, I enjoy the process of styling. I like
						making things feel balanced, responsive, and easy to
						read. And when something doesn't behave how I expect, I
						can usually figure out why.
					</p>

					<p>
						If you're in that early “why won't this div align
						properly” stage — hang in there. There's no secret
						trick, just time, patience, and a lot of practice. You
						get better by doing it. Then doing it again.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: new Date("2025-05-18"),
		title: "Building my portfolio: how I structured it and why",
		published: false,
        articleNumber: 5,
		description:
			"I wanted a portfolio site that felt clean, personal, and easy to update. Here's how I built it using a GitHub template, custom styling, and dynamic project loading via the GitHub API.",
		keywords: [
			"Portfolio website",
			"Frontend developer portfolio",
			"Reactfolio",
			"GitHub API integration",
			"Dave Donnelly",
			"React portfolio template",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Putting together a portfolio site can feel like a
						project in itself — especially when you're still growing
						your skills and figuring out what kind of developer you
						want to be.
					</p>
					<p>
						For me, the goal was simple: I wanted to create a site
						that felt personal but professional. Something that
						showed where I'm at, how I think, and the kind of work I
						want to do more of.
					</p>

					<p>
						<b>What I wanted it to do</b>
						<br />I built this portfolio primarily for hiring
						managers, so I kept asking myself:
						<ul>
							<li>
								If someone only spends two minutes here, what do
								I want them to walk away knowing?
							</li>
							<li>
								How can I show my personality without
								overloading them with info?
							</li>
							<li>
								Can I make it easy to navigate without being too
								minimal?
							</li>
						</ul>
						I wanted it to include my story, highlight a few
						projects I'm proud of, and give people an easy way to
						get in touch. That's it. No fluff.
					</p>

					<p>
						<b>How I built it</b>
						<br />
						To save time — and to show that I could work with and
						adapt existing code — I started with a great open-source
						React template I found on GitHub: <br />
						👉{" "}
						<a
							href="https://github.com/truethari/reactfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							truethari/reactfolio
						</a>
						<br />
						<br />
						It had the basic structure I needed, and from there I
						tweaked and reworked the design, components, and layout
						to make it feel like mine. It was a good exercise in
						reading someone else's code, figuring out how things fit
						together, and customising it to suit my needs.
						<br />
						<br />
						You can see the full source code for my version here:
						<br />
						👉{" "}
						<a
							href="https://github.com/davedonnellydev/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/davedonnellydev/portfolio
						</a>
					</p>

					<p>
						<b>Dynamic GitHub project integration</b>
						<br />
						One of the features I added was a GitHub API integration
						to automatically pull in project data. It fetches my
						public repos, filters by specific topics/tags, and
						displays them in the Projects section of my site.
						<br />
						<br />
						Why? So I never have to manually update the portfolio
						whenever I start a new project. If I publish something
						new on GitHub and tag it appropriately, it appears
						automatically. It's a small detail, but one that saves
						time and keeps things current.
					</p>

					<p>
						<b>Decisions I made on content</b>
						<ul>
							<li>
								<b>I kept the writing conversational</b> - I
								wanted the tone to sound like me, not like a
								resume.
							</li>
							<li>
								<b>
									I included real projects, not just
									coursework
								</b>{" "}
								- Even small tools or code experiments that
								solved real problems got a place.
							</li>
							<li>
								<b>
									I wrote blog posts that reflect how I think
								</b>{" "}
								- I figured it's a good way to show how I work
								through problems, not just what I can build.
							</li>
							<li>
								<b>I didn't overload it</b> - Some things didn't
								make the cut — not because they weren't good,
								but because they didn't help tell the right
								story.
							</li>
						</ul>
					</p>

					<p>
						<b>What I'd do differently next time</b>
						<br />
						Honestly, I probably spent a bit too long tweaking
						things that didn't matter much. Colours, font sizes,
						animations — the perfectionist in me definitely slowed
						down progress at times.
						<br />
						<br />
						Next time, I'd probably prototype faster, commit to a
						structure earlier, and spend more time up front on
						content planning rather than fiddling with spacing.
						<br />
						<br />
						But all up, I'm happy with where it landed — and proud
						of how far I've come.
					</p>

					<p>
						<b>Final thoughts</b>
						<br />A portfolio doesn't have to be flashy — it just
						has to be honest. This is where I'm at right now, and
						I've built it to reflect that. If you're building your
						own, my advice is simple: focus on clarity, show your
						process, and don't wait for “perfect” before you hit
						publish.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		date: new Date("2025-06-01"),
		title: "That one time an Excel workflow turned into a web app",
		published: false,
        articleNumber: 6,
		description:
			"A simple web tool I built to replace an Excel formula taught me more than I expected about React, problem-solving, and real-world usefulness.",
		keywords: [
			"Excel to web app",
			"React project",
			"Real world coding",
			"Workflow automation",
			"Dave Donnelly",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						In my previous role, Excel was the default tool for
						everything — data analysis, reporting, formatting, even
						quick fixes to clean up inputs before sending them
						somewhere else. And while Excel is powerful, there were
						a few repetitive tasks that had me thinking, “Surely
						there's a better way to do this.”
					</p>
					<p>
						So when I started learning web development, one of my
						early experiments was turning one of those small Excel
						workflows into a simple web app.
					</p>

					<p>
						<b>The problem</b>
						<br />I needed to reformat a list of Jira issue keys to
						paste into a bulk update window — specifically, wrapping
						each issue key in quotes and separating them by commas.
						Think:
						<pre>
							PCSPPA-123{"\n"}
							PCSPPA-456{"\n"}
							PCSPPA-789
						</pre>
						Turning into:
						<pre>"PCSPPA-123", "PCSPPA-456", "PCSPPA-789"</pre>
						In Excel, I had a formula that did this with a few
						helper columns and some careful copying. But it was
						fiddly, especially if you weren't the one who set it up
						in the first place.
					</p>

					<p>
						<b>The solution</b>
						<br />I built a tiny web tool in React that let me paste
						a list of issue keys into a textarea and instantly
						returned the formatted result. It even auto-copied the
						output to the clipboard. No dependencies, no backend,
						just a clean, focused little app that did one thing
						really well.
					</p>

					<p>
						<b>What I learned</b>
						<br />
						<ul>
							<li>
								I got practice using React state and string
								manipulation
							</li>
							<li>
								I learned how to handle user input and display
								dynamic output
							</li>
							<li>
								I experienced firsthand how frontend tools can
								replace (and improve) real-world workflows
							</li>
						</ul>
						Most importantly, it gave me a clear example of how
						development skills can make day-to-day work faster and
						easier — even for tasks that seem small.
					</p>

					<p>
						<b>The takeaway</b>
						<br />
						If you're learning to code, look for those little pain
						points in your current workflow. Solving them might not
						only save you time, but also give you a great portfolio
						project — one with a real use case and a story behind
						it.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_7() {
	return {
		date: new Date("2025-06-15"),
		title: "How I keep track of what I learn (without drowning in bookmarks)",
		published: false,
        articleNumber: 7,
		description:
			"When you're learning constantly, it's easy to forget as much as you absorb. Here's my lightweight system for logging what I learn — especially when watching YouTube on the go.",
		keywords: [
			"Frontend learning",
			"Dev notes",
			"Learning on YouTube",
			"Dave Donnelly",
			"Notion dev journal",
			"Organising developer knowledge",
		],
		style: `
                .article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Learning frontend development means constantly
						discovering new things: cool tricks, better patterns,
						ways to fix weird bugs you hope you never see again.
					</p>
					<p>
						But early on, I kept running into the same problem: I'd
						find something useful, forget where I saw it, and end up
						googling the exact same thing two weeks later.
					</p>
					<p>
						Eventually, I realised I needed a system — not a perfect
						one, just something to help me stay organised and retain
						what I'd learned.
					</p>

					<p>
						<b>My lightweight system</b>
						<br />
						Here's what's been working for me:
						<ul>
							<li>
								<b>A dev journal</b> - I keep a Notion page with
								rough notes from what I'm working on. I log
								issues I ran into and how I solved them (even if
								it's just “remember to import the right thing
								next time”).
							</li>
							<li>
								<b>Code snippets</b> - If I write or come across
								something reusable, I paste it into a local
								snippets library with tags and a one-line
								description.
							</li>
							<li>
								<b>Tags over folders</b> - I've stopped worrying
								about perfect folder structures. I use tags like{" "}
								<code>React</code>, <code>CSS</code>,{" "}
								<code>bug-fix</code>, so I can just search when
								I need something.
							</li>
						</ul>
					</p>

					<p>
						<b>Learning from YouTube on the go</b>
						<br />
						Most of my learning happens through YouTube — especially
						from great dev content creators. Since I often watch on
						the bus or while commuting, I've had to come up with a
						system that works even when I'm not coding at a desk:
						<ul>
							<li>
								I jot down notes in Notion or my phone's Notes
								app — just quick takeaways, like “framer motion
								delayChildren 👌” or “look up clamp() for font
								sizing”.
							</li>
							<li>
								If I remember, I'll include the video title and
								a rough timestamp so I can rewatch later.
							</li>
							<li>
								Once or twice a week, I review those notes and
								clean up anything worth keeping long-term —
								either into my dev journal or snippets.
							</li>
						</ul>
						It's not perfect, but it means those random lightbulb
						moments on the bus don't get lost in the void.
					</p>

					<p>
						<b>What I don't do</b>
						<ul>
							<li>
								I don't save <i>every</i> video or resource I
								come across. Only the ones that genuinely
								helped.
							</li>
							<li>
								I don't try to write polished articles about
								everything I learn. Some things are just for
								future-me.
							</li>
							<li>
								I don't aim for perfection. Just consistency.
							</li>
						</ul>
					</p>

					<p>
						<b>Why it helps</b>
						<br />
						Writing things down — even briefly — helps me remember
						them. And when I <i>don't</i> remember, I have a single
						place to look before diving into another 20-tab Stack
						Overflow rabbit hole.
						<br />
						<br />
						It's not about documentation. It's about lowering the
						friction of re-learning the same lesson twice.
					</p>

					<p>
						<b>Final thoughts</b>
						<br />
						If you're early in your dev journey and feeling like you
						forget things as fast as you learn them — you're not
						alone. You don't need a perfect system. Just something
						simple that works for you.
						<br />
						<br />
						Start small. Keep it messy. Future-you will thank you.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [
	article_1,
	article_2,
	article_3,
	article_4,
	article_5,
	article_6,
	article_7,
];

export default myArticles;
