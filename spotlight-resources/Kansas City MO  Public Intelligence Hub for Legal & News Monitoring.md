# Kansas City, MO: Public Intelligence Hub for Legal & News Monitoring

## Overview

This report is a comprehensive directory of every publicly accessible platform, feed, API, and community channel covering Kansas City, Missouri — organized for a personal injury attorney or investigative journalist tracking accidents, injuries, deaths, construction incidents, public safety failures, weather events, and community concerns in real time.

***

## 🚨 Real-Time Public Safety: Scanners & Police/Fire Feeds

These are the most time-sensitive sources for traffic accidents, fatalities, fires, EMS calls, and major incidents as they happen.

| Source | URL / Access | What You'll Hear |
|--------|-------------|-----------------|
| **Broadcastify – KC Regional Public Safety** | broadcastify.com/listen/feed/23630 | MO Highway Patrol, KCFD, Lee's Summit Fire/EMS, Independence AMR, KCI Fire, Jackson County [^1] |
| **Broadcastify – KC Metro All Feeds** | broadcastify.com/listen/mid/63 | Directory of all active KC-area audio feeds [^2] |
| **KC Regional Police & Fire Scanner (Facebook)** | facebook.com/LSscanner | Live posts from the scanner feed; public page updated in real time [^3] |
| **Alert KC / Nixle** | kcpolices.org/media/alert-kc | KCPD-powered text/email alerts for public safety events [^4] |
| **5-0 Radio / Radio Scanner apps** | iOS/Android | Community recommendation for KC fire and EMS calls [^5] |

**Pro tip:** Broadcastify Feed #23630 is the main active regional feed covering KCFD, Lee's Summit Fire, AMR, and MO Highway Patrol. Feed #43437 (the original KC trunked feed) was offline as of research — check for restoration.[^6]

***

## 📺 Local News: TV, Print & Digital Outlets

### Television Stations (All Have RSS, Social & YouTube)

| Station | Website | YouTube | X (Twitter) | TikTok |
|---------|---------|---------|-------------|--------|
| **KCTV5** | kctv5.com | youtube.com/c/kctv5 [^7] | @KCTV5 | @kctv5news |
| **KMBC 9** | kmbc.com | youtube.com/@KMBC [^8] | @kmbc [^9] | @kmbc9 [^10] |
| **KSHB 41** | kshb.com | youtube.com/channel/UCzhtAFR4aiLOr8IWqA92-5w [^11] | @KSHB41 [^12] | — |
| **FOX4 KC** | fox4kc.com | youtube.com/channel/UCBcu7y-Sqgx-X2ss3SpEu2A [^13] | @fox4kc [^14] | — |
| **Spectrum News KC** | spectrumlocalnews.com/mo/kansas-city | — | @SpectrumNewsKC [^15] | — |

KSHB 41 explicitly brands its public safety section as "Kansas City Public Safety" — covering police, fire, emergency services and traffic. KMBC TikTok has 568K likes and 13.3K followers covering local KC news and weather.[^16][^10]

### Print, Digital & Nonprofit Newsrooms

| Outlet | Website | Specialty |
|--------|---------|-----------|
| **Kansas City Star** | kansascity.com [^17] | Dominant daily; breaking news, courts, investigations |
| **KCUR 89.3 (NPR)** | kcur.org [^18] | Investigative journalism, health, environment, politics |
| **The Beacon KC** | thebeaconnews.org [^19] | Nonprofit; elections, schools, economics, local gov |
| **Flatland (KC PBS)** | flatlandkc.org | Civic affairs, arts, education |
| **The Pitch KC** | thepitchkc.com [^20] | Independent alt-weekly; culture, local news |
| **Startland News** | startlandnews.com [^21] | Startups, innovation, KC entrepreneurs |
| **Missouri Business Alert** | moba.news [^21] | MU School of Journalism; business news statewide |
| **Northeast News KC** | northeastnewskc.com | Hyperlocal; Independence Avenue corridor[^22] |

The **KC Media Collective** is a formal collaboration of KCUR, Flatland/KC PBS, The Beacon, Startland News, American Public Square, and Missouri Business Alert — all sharing and cross-publishing local journalism.[^21]

***

## 📡 RSS Feeds: Subscribe & Monitor Automatically

These feeds push headlines directly to your inbox or RSS reader (Feedly, Inoreader, etc.) as stories break:

| Feed | URL |
|------|-----|
| **KSHB 41 – Local News** | kshb.com/about-us/rss [^23] |
| **KSHB 41 – Public Safety** | kshb.com/rss/category/news/crime |
| **KCUR News** | kcur.org/rss |
| **NWS Kansas City Alerts** | weather.gov/eax → RSS feed link [^24] |
| **NWS All Alerts (statewide)** | weather.gov/rss [^25] |
| **MO State Highway Patrol News** | mshp.dps.missouri.gov/MSHPWeb/RSSNewsFeed.html [^26] |
| **US Army Corps of Engineers KC** | nwk.usace.army.mil/Contact/RSS [^27] |
| **Kansas City Star** | kansascity.com (RSS link in site footer) |

**NWS Kansas City Office (EAX):** Covers the KC metro with active RSS for severe weather warnings, tornado alerts, flood warnings, and storm statements. The NWS API at `api.weather.gov` is a free, no-key REST/JSON service  — point it at KC coordinates (39.0997° N, 94.5786° W) for real-time alerts and forecasts.[^24][^28]

***

## 🌐 Open Data APIs: Machine-Readable, Always-On

### City of Kansas City (data.kcmo.org)

The Open Data KC portal was launched in 2013 and publishes city data in CSV, JSON, and via Socrata APIs. Key datasets for legal/investigative monitoring:[^29]

| Dataset | Description | URL |
|---------|-------------|-----|
| **KCPD Crime Data 2025** | Current crime incidents, refreshed regularly [^30] | data.kcmo.org/dataset/KCPD-Crime-Data-2025/dmnp-9ajg |
| **311 Reported Issues (2021–present)** | Citizen complaints: potholes, hazards, unsafe properties [^31] | data.kcmo.org/311/311-Call-Center-Reported-Issues/d4px-6rwg |
| **311 Service Requests (2007–2021 archive)** | Historical 311 data [^32] | data.kcmo.org/311/311-Call-Center-Service-Requests/7at3-sxhp |
| **Neighborhoods & Zoning** | Parcel data, land use, permits [^33] | CompassKC (compasskc.kcmo.org) |

The 311 dataset alone logged over 310,000 calls in one 4-year window covering issues like hazardous properties, broken infrastructure, and public nuisances — searchable by neighborhood and request type.[^34]

### Missouri State-Level Data

| Source | What It Tracks | Access |
|--------|---------------|--------|
| **MSHP STARS Crash Reports** | All crashes in MO past 29 days — searchable by county, city, injury level [^35][^36] | mshp.dps.missouri.gov/SAC/stars |
| **Missouri Open Data Portal** | State-level service requests and public records [^32] | data.mo.gov |
| **KCMO Online Crash Reports** | KCPD crash reports via BuyCrash; $9/report [^37] | kcpolices.org/online-crash-reports |
| **NHTSA FARS API** | Federal fatal crash data by state/county back to 2010 [^38] | crashviewer.nhtsa.dot.gov/CrashAPI |

The MSHP STARS tool is especially powerful — it returns crash data from the Missouri Crash Analysis Reporting System (MOCARS), which receives mandatory crash reports from every MO law enforcement agency under RSMo 43.250.[^36]

### MARC Regional Open Data

The Mid-America Regional Council (MARC) launched a new open data portal in May 2026 covering datasets, interactive maps, and place-based stories for the broader KC region — accessible at marc.org.[^39]

***

## 📱 Social Media: Facebook Groups & Pages

### Accident & Incident Specific

| Group/Page | Description |
|-----------|-------------|
| **KC Wreck Witness** | facebook.com/groups/1026702245479481 — Connects accident victims with witnesses; active community [^40] |
| **Kansas City Secrets** | Large general KC group — members regularly post accident witnesses sought, hit-and-runs [^41][^42] |
| **Northeast News KC (Page)** | Reports accidents and arrests along Independence Avenue corridor in real time [^22][^43] |

### Crime Watch & Public Safety Groups

| Group | Description |
|-------|-------------|
| **Kansas City & Surrounding Areas Crime Watch** | facebook.com/groups/2050778525238155 — Partners with CrimeReports.com [^44] |
| **Kansas City Crime Alert** | facebook.com/groups/242073486345760 — Alerts on criminal activity across KC metro [^45] |
| **Crime and Public Safety in Kansas City** | facebook.com/groups/1265362313948851 [^46] |
| **Historic Northeast Crime Watch** | facebook.com/groups/137269919805399 — Specific to HNE neighborhoods [^47] |
| **West Plaza Watch** | facebook.com/groups/443409465719196 — Plaza area safety [^48] |
| **Unofficial Old Hyde Park Neighborhood Watch** | facebook.com/groups/443409465719196 [^49] |

### Official Pages to Follow

| Page | Followers | Why |
|------|-----------|-----|
| **KCPD Facebook** | High | Official KCPD announcements, crash data, wanted persons [^50] |
| **KCTV5** | High | Posts traffic fatality counts; in 2025, 68 people died in KC crashes [^51][^52] |
| **Missouri State Highway Patrol** | High | Posts crash stats; 5 deaths, 87 injuries in 187 crashes during 2026 New Year's period [^53] |
| **KSHB 41** | High | Breaking news including fatal collisions, USPS driver deaths [^54] |

The KCMO 311 service is also on X/Twitter as **@KCMO311** and is monitored by the city for service requests and complaints. The official City of Kansas City X account is **@KansasCity**.[^55][^56]

***

## 🐦 X (Twitter) Accounts: Breaking News Fast

| Account | Handle | What to Watch |
|---------|--------|--------------|
| KCPD | @kcpolice | Official; 263K followers; not 24/7 monitored [^57] |
| Kansas City Star | @KCStar | Breaking news since 1880 [^58] |
| KMBC | @kmbc | KC's self-described "news leader" [^9] |
| KSHB 41 | @KSHB41 | Tips: tips@kshb.com; "Your Voice. Your Team." [^12] |
| FOX4 KC | @fox4kc | News tips: news@fox4kc.com [^14] |
| Spectrum News KC | @SpectrumNewsKC | Politics, weather, sports [^15] |
| City of KC | @KansasCity | Official city announcements [^55] |
| KCMO 311 | @KCMO311 | Service requests, public complaints [^56] |

***

## 📱 Reddit Communities

Reddit hosts some of the most candid, unfiltered community discussion about what's happening in KC — and users often post about incidents before news outlets cover them.[^59]

| Subreddit | Focus | Link |
|-----------|-------|------|
| **r/kansascity** | Primary KC sub; Missouri and Kansas suburbs | reddit.com/r/kansascity [^59] |
| **r/kcmo** | KCMO-specific; 17-year-old community [^60] | reddit.com/r/kcmo |
| **r/KansasCityKansas** | KCK specific [^61] | reddit.com/r/KansasCityKansas |
| **r/Missouri** | State-wide news and interest [^62] | reddit.com/r/Missouri |

**r/kansascity** is particularly useful — users post about neighborhood incidents, accidents, flooding, construction issues, and ask for witness information organically.

***

## 🏘️ Nextdoor: Neighborhood-Level Intelligence

Nextdoor is the most granular neighborhood monitoring tool — it posts real-time safety alerts, power outages, accidents, suspicious activity, and neighbor complaints at the block level. The platform supports:[^63]

- Real-time neighborhood alerts for safety, power outages, and emergencies[^63]
- Public agency posts where KCPD and KCFD can push emergency alerts directly[^64]
- An **Alerts Map** displaying real-time weather, traffic, and public safety information[^65]

KCMO has 345,000+ Nextdoor neighborhoods nationally, with KC's neighborhoods ranked by friendliness. Nextdoor is not fully public — you need to join verified as a KC resident — but public agency posts are visible more broadly.[^66]

***

## 🌩️ Weather: Alerts, APIs & Monitoring

Severe weather generates slip-and-fall cases, flood damage claims, negligence in construction, and liability issues for property owners.

| Source | How to Access | What You Get |
|--------|--------------|-------------|
| **NWS Kansas City (EAX)** | weather.gov/eax [^24] | Official forecasts, RSS alerts, tornado/flood warnings |
| **NWS Alerts API** | api.weather.gov/alerts?area=MO | Free REST API; active alerts for Missouri in JSON [^28] |
| **Evergy Outage Map** | evergy.com/outages/outage-map [^67] | Real-time power outage map for KC metro |
| **usoutage.com/evergy** | usoutage.com/evergy [^68] | Third-party live tracker; 90 counties, 2 states |
| **NOAA KJOW (weather radio)** | NWS EAX broadcast | 162.400 MHz covering KC metro |

KCUR noted in May 2026 that Kansas City has seen more tornadoes than usual this year and storm season is far from over — making weather monitoring especially timely right now.[^18]

***

## 🔨 Construction & Workplace Injuries: OSHA Data

Construction accidents are a rich source of both news and personal injury cases. All OSHA data is public and searchable:

| Tool | URL | What to Search |
|------|-----|---------------|
| **OSHA Establishment Search** | osha.gov/ords/imis/establishment.html [^69] | Search any company by name + Kansas City zip codes (641xx, 640xx) |
| **OSHA Accident Search** | osha.gov/ords/imis/accidentsearch.search [^70] | Filter by MO, date range, injury type |
| **OSHA Inspection Archive** | Updated through 05/08/2026 [^69] | Repeat violators, citations, penalty amounts |

**Recent example:** In March 2026, OSHA fined K&W Underground $66,000+ for a fatal trench collapse in KCK — all violations were repeats from 2022. KSHB and YouTube covered the story as it broke. This is exactly the type of case visible through OSHA records before it becomes a high-profile lawsuit.[^71][^72]

***

## ⚖️ Court Records: Find Cases Before They Go Public

### Missouri State Courts
- **Missouri Case.net** (casenet.courts.mo.gov) — Search circuit court dockets, parties, judgments, and charges across all MO courts that use the state's case management system[^73][^74]
- **KC Municipal Court** — Records at MissouriCase.Net; formal records requests via court@kcmo.org[^73]

### Federal Courts
- **PACER** (pacer.uscourts.gov) — 1 billion+ federal court documents; $0.10/page[^75]
- **US District Court, Western District of Missouri (Kansas City Division)** — 400 E 9th St, KC MO 64106; (816) 512-5000[^76]

### Sunshine Law (Missouri FOIA)
Missouri's Sunshine Law (RSMo 610) governs public records requests from city agencies. KCMO has a dedicated Sunshine Law Request Page for official records requests. Permits, inspections, and code violations since 2018 are searchable via **CompassKC**.[^33]

***

## 🏊 Parks, Pools & Public Amenities: Injury Hotspots

Public pools and parks are active litigation areas in KC. Key monitoring points:

- **Oceans of Fun / Worlds of Fun** (Cedar Entertainment, now Zamperla-owned) — Subject of multiple lawsuits including a 2022 drowning death where lifeguards failed to notice a 6-year-old for several minutes[^77][^78][^79]
- KC enforces building codes requiring anti-entrapment devices, fencing, and signage at pools; violations can establish negligence[^80]
- KCMO Parks & Recreation operates numerous public pools — monitor 311 complaints (data.kcmo.org) and permit records (CompassKC) for conditions and complaints
- Reddit r/kansascity regularly discusses pool access disputes, safety incidents, and park issues[^81]

***

## 📲 TikTok & YouTube: Viral Local Content

| Account | Platform | Followers | Content |
|---------|----------|-----------|---------|
| Kansas City Star | TikTok @thekansascitystar [^82] | 94.5K | Breaking KC stories since 1880 |
| KMBC 9 | TikTok @kmbc9 [^10] | 13.3K | Local news and weather |
| KC Discover | TikTok @kansascitydiscover [^83] | 61.5K | KC lifestyle, neighborhoods |
| KCTV5 | YouTube [^7] | Active | Breaking news, weather, investigations |
| KMBC | YouTube [^8] | Active | Local stories, including construction issues |
| FOX4 KC | YouTube [^13] | Active | KC news, crime, public safety |
| Kansas City Star | YouTube [^84] | Active | Local video journalism |

***

## 💬 Discord Servers

Discord servers for KC exist but are primarily social/gaming in nature. No dedicated KC public safety or news Discord was identified. The **KC Pokémon Go Discord** network spans geographic sub-servers (Downtown, North KC, Lee's Summit, Independence) and can serve as a real-time community pulse for neighborhood conditions.[^85][^86]

***

## 🗺️ Specialized Monitoring Tools & Platforms

| Tool | Purpose | URL |
|------|---------|-----|
| **myKCMO App** | Report and track 311 requests; city service issues | App Store / Google Play [^56] |
| **CrimeReports.com** | KCPD-partnered crime mapping for KC neighborhoods [^44] | crimereports.com |
| **CompassKC** | Permit search, code violations, CofO records since 2018 [^33] | compasskc.kcmo.org |
| **KCMO Parcel Viewer** | Zoning, land use, property data [^33] | KCMO Interactive Parcel Viewer |
| **MARC Open Data Portal** | Regional datasets, infrastructure, transportation [^39] | marc.org |
| **Code for Kansas City GitHub** | Index of KC open data sources: crime, reported issues, land bank [^87] | github.com/codeforkansascity/kc-open-data-library |

***

## 🔍 Strategy: How to Use This as a Legal/News Intelligence System

### For Personal Injury Case Development

1. **Monitor Broadcastify** in real time for accident/fire dispatches — you'll know about crashes, trench collapses, and EMS calls before any news story publishes
2. **Subscribe to KSHB 41 RSS** (Public Safety section) and **KC Star** RSS — high-volume crash and incident coverage
3. **Set up MSHP STARS alerts** — search weekly for recent crashes by county/city and injury level
4. **Check KCPD Facebook and @kcpolice** daily for official incident posts
5. **Search OSHA** monthly for Kansas City area inspections and violations — trench collapses, falls, electrical hazards
6. **Monitor KC Wreck Witness Facebook group** — witnesses actively seek attorneys and connect with victims
7. **Search r/kansascity** and r/kcmo for posts about accidents, unsafe conditions, property hazards, and discrimination

### For Investigative/Reporter Angles

1. **311 Data (data.kcmo.org)** — Track complaint clusters in a neighborhood (e.g., 10 complaints about a property = story)
2. **OSHA Accident Search** — Filter MO for all fatalities in last 30 days; compare against news coverage to find unreported cases
3. **Missouri Case.net** — Monitor new filings against repeat defendants (landlords, employers, contractors)
4. **Nextdoor** — Join KC neighborhoods to see what residents are angry about before it becomes news
5. **KCUR and The Beacon** — Both produce investigative work on housing, schools, and health; follow for emerging issue areas
6. **NWS API** — Build a simple alert that fires when severe weather warnings are issued for Jackson/Clay/Platte counties

### Current High-Priority Issues (as of May 2026)

- **Traffic fatalities:** 68 people died in KC crashes in 2025; at least 11 in 2026 by February[^52][^51]
- **Work zone deaths:** 24 Missourians died in work zone crashes in 2025; 110 serious injuries[^88]
- **Tornado season:** KC seeing above-average tornado activity in 2026[^18]
- **World Cup 2026 preparations:** Major construction, crowd incidents, and infrastructure stress expected through June-July 2026[^18]
- **School district budget crises:** Multiple districts cutting staff and programs due to funding shortfalls[^18]
- **Canvas LMS hack:** Disrupted schools across Missouri — data breach/privacy exposure[^18]
- **Tenant/housing disputes:** KC Council moving to protect historic buildings; tenant rent hike fights reported[^18]
- **Hantavirus monitoring:** Health officials monitoring for hantavirus ahead of World Cup[^18]

***

## Summary Checklist: Essential Subscriptions

| Priority | Action |
|----------|--------|
| ⭐⭐⭐ | Bookmark Broadcastify Feed #23630 — live KC public safety audio |
| ⭐⭐⭐ | Follow KC Wreck Witness on Facebook |
| ⭐⭐⭐ | Subscribe KSHB Public Safety RSS + KCPD Facebook |
| ⭐⭐⭐ | Bookmark MSHP STARS crash search tool |
| ⭐⭐⭐ | Bookmark data.kcmo.org (311 + KCPD crime data) |
| ⭐⭐⭐ | Set NWS Kansas City (EAX) RSS for severe weather alerts |
| ⭐⭐ | Monitor OSHA establishment search weekly for KC zip codes |
| ⭐⭐ | Join r/kansascity and r/kcmo on Reddit |
| ⭐⭐ | Follow @kcpolice, @KSHB41, @fox4kc, @KCStar on X |
| ⭐⭐ | Set up Missouri Case.net alerts/searches |
| ⭐ | Join Nextdoor (requires KC address verification) |
| ⭐ | Register on PACER for federal litigation monitoring |

---

## References

1. [Kansas City Regional Public Safety - Broadcastify](https://www.broadcastify.com/listen/feed/23630) - Kansas City Regional Public Safety · Live Audio · Feed Details · Feed Archives · Feed Notes · Premiu...

2. [Kansas City Metro Audio Feeds - Broadcastify](https://www.broadcastify.com/listen/mid/63) - Audio feeds in Kansas City metro area.

3. [Kansas City Regional Police and Fire Scanner - Facebook](https://www.facebook.com/LSscanner/) - Kansas City Regional Police and Fire Scanner. Listen to live online scanner radio communications aro...

4. [Alert KC - Kansas City Missouri Police Department](https://kcpolice.org/media/alert-kc/) - Our mission: To protect and serve with professionalism, honor and integrity. Call 911 for emergencie...

5. [What police scanner apps do you use? : r/kansascity - Reddit](https://www.reddit.com/r/kansascity/comments/1bmdiq2/what_police_scanner_apps_do_you_use/) - I will use 5.0 radio or Broadcastify. I mostly hear fire department/ems calls or traffic incidents o...

6. [Kansas City Area Fire and Police - Broadcastify](https://www.broadcastify.com/listen/feed/43437) - The ORIGINAL Kansas City trunked feed. Anything within the listening area of Glafdstone. UMKC, KCFD,...

7. [KCTV5 News - YouTube](https://www.youtube.com/c/kctv5) - KCTV5 is your local source for breaking news, live weather updates, and meaningful stories that impa...

8. [KMBC 9 - YouTube](https://www.youtube.com/@KMBC) - KMBC 9 ; Chillicothe permitted woman's home. Now city attorney says she must move it. 2.2K views ; B...

9. [KMBC (@kmbc) / Posts / X - Twitter](https://x.com/kmbc) - Posts · Princess Kate visits Italy in first official overseas trip since cancer treatment · Attorney...

10. [KMBC 9 News (@kmbc9) - TikTok](https://www.tiktok.com/@kmbc9) - KMBC 9 News (@kmbc9) on TikTok | 568K Likes. 13.3K Followers. Kansas City news and weather from KMBC...

11. [KSHB 41 - YouTube](https://www.youtube.com/channel/UCzhtAFR4aiLOr8IWqA92-5w) - KSHB 41 News is Kansas City's home for delivering urgent, accurate and relevant news, weather and sp...

12. [KSHB 41 News (@KSHB41) / Posts / X - Twitter](https://x.com/KSHB41) - Kansas City, Missouri, police are searching for a driver involved in a deadly collision Wednesday ni...

13. [FOX4 News Kansas City - YouTube](https://www.youtube.com/channel/UCBcu7y-Sqgx-X2ss3SpEu2A) - Your go-to source for Kansas City's latest news, weather and sports. ... ... Teen arrested following...

14. [FOX4 News Kansas City (@fox4kc) / Posts / X - Twitter](https://x.com/fox4kc) - Kansas City news, weather and sports from FOX4. Working for you in Kansas and Missouri. News tips: [...

15. [Spectrum News Kansas City (@SpectrumNewsKC) / Posts / X - Twitter](https://x.com/SpectrumNewsKC) - Spectrum News Kansas City (@SpectrumNewsKC) - Posts - Covering local news, politics, sports and weat...

16. [Kansas City Public Safety](https://www.kshb.com/news/crime) - Kansas City Public Safety. Check here for latest police, fire, emergency services and traffic inform...

17. [Kansas City Star: Kansas City Breaking News & Sports](https://www.kansascity.com) - Read today's latest Missouri news including Kansas, Overland Park and Lee's Summit. Follow crime, po...

18. [KCUR | KCUR - Kansas City news and NPR](https://www.kcur.org) - 2026 elections · Local news · Missouri news · Kansas news · Politics · Housing & development · Educa...

19. [Kansas City news from The Beacon](https://thebeaconnews.org) - Get the latest Kansas City news from The Beacon covering elections, school boards, economics, health...

20. [Kansas City Pitch: Home](https://www.thepitchkc.com) - Kansas City's independent source for news and culture. x. Food & Drink · Dish & Drink KC: Hemma Hemm...

21. [KC Media Collective - Home - Kansas City Media Collective](https://www.kcmediacollective.org) - Members of the KC Media Collective include: American Public Square, Kansas City PBS/Flatland, KCUR, ...

22. [We've seen multiple accidents and arrests along the Independence ...](https://www.facebook.com/northeastnewskc/posts/weve-seen-multiple-accidents-and-arrests-along-the-independence-avenue-corridor-/1600994462028025/) - We've seen multiple accidents and arrests along the Independence Avenue corridor today. Please be sa...

23. [RSS - KSHB 41](https://www.kshb.com/about-us/rss) - Mariah Kettler. Kansas City. Kansas City considers allowing bars to stay open until 5 a.m. during Wo...

24. [Kansas City/Pleasant Hill, MO - National Weather Service](https://www.weather.gov/eax/) - EAX RSS Feed · Hazards · Decision Support · Situation Report · Local Weather Story · Submit Report ·...

25. [RSS Libraries and Podcast - National Weather Service](https://www.weather.gov/rss/) - RSS Feeds · Hurricane/Tropical Cyclones. Atlantic/Caribbean/Gulf of America/Eastern Pacific · Severe...

26. [RSS News Feed - Missouri State Highway Patrol](https://www.mshp.dps.missouri.gov/MSHPWeb/RSSNewsFeed.html) - The Missouri State Highway Patrol is offering a RSS feed to anyone visiting our web site in order to...

27. [RSS - Kansas City District](https://www.nwk.usace.army.mil/Contact/RSS/) - US Army Corps of Engineers Kansas City District Northwestern Division news and information is availa...

28. [api.weather.gov: General FAQs - GitHub Pages](https://weather-gov.github.io/api/general-faqs) - It offers public access to a wide range of essential weather data, in a way that modern web develope...

29. [About Open Data KC](https://data.kcmo.org/stories/s/About-Open-Data-KC/rcdw-qv83/) - Open Data KC is the City's program and portal (website) to publish city data. The City launched the ...

30. [KCPD Crime Data 2025 | Open Data KC | data.kcmo.org](https://data.kcmo.org/dataset/KCPD-Crime-Data-2025/dmnp-9ajg) - This provides the user the ability to view the most current crime information within Kansas City, Mi...

31. [Search & Browse 311 | Page 1 of 8 | Open Data KC](https://data.kcmo.org/browse?category=311)

32. [data.mo.gov | State of Missouri Data Portal](https://data.mo.gov/browse?tags=service+requests)

33. [Records Requests | CITY OF KANSAS CITY | OFFICIAL WEBSITE](https://www.kcmo.gov/city-hall/departments/city-planning-development/records-requests-and-freedom-of-information-act) - Search Public Records Using CompassKC. Customers can access most of the permit records on properties...

34. [JRDeLisle: Kansas City Land Bank](https://jrdelisle.com/research/311KC_Embed_v1.php)

35. [STARS Report Descriptions - Missouri State Highway Patrol](https://www.mshp.dps.missouri.gov/MSHPWeb/LawEnforcement/starsReportDescriptions.html) - A search tool to identify crashes investigated by the MSHP in the past 29 days. Searches can be cond...

36. [Traffic Crash Reports - Missouri State Highway Patrol](https://www.mshp.dps.missouri.gov/MSHPWeb/SAC/stars_index.html) - Online Traffic Crash Reports: A search tool to identify persons involved in crashes that occurs in t...

37. [Online Crash Reports - Kansas City Missouri Police Department](https://kcpolice.org/about/services/report-and-video-requests/online-crash-reports/) - Traffic crash reports are available for purchase online through BuyCrash. You will need to have your...

38. [Fatality Analysis Reporting System (FARS) API - Crash Viewer](https://crashviewer.nhtsa.dot.gov/CrashAPI) - The NHTSA Crash data Application Programming Interface (API) provides various ways to get crash data...

39. [New MARC open data portal makes regional data easier…](https://www.marc.org/news/data-maps/new-marc-open-data-portal-makes-regional-data-easier-find-explore-and-use) - The portal brings together datasets, interactive maps and place‑based stories that help tell the sto...

40. [KC Wreck Witness | Facebook](https://www.facebook.com/groups/1026702245479481/) - KC Wreck Witness is a page to connect accident victims with people who witnessed the incident. Infor...

41. [Hit and run resources in Kansas City, MO? - Facebook](https://www.facebook.com/groups/kansascitysecrets/posts/4321669188093843/) - Isn't there a group for hit and runs and stuff in KC? I have a friend that could use some help getti...

42. [car crash on hwy 71 south bound? | Kansas City, MO - Facebook](https://www.facebook.com/groups/kansascitysecrets/posts/4214154498845313/) - Did anyone witness a hit and run at Lake Remembrance? Profile photo of Kris. Kris Welch ▻ KC Wreck W...

43. [Emergency crews responded earlier this morning to a rollover crash ...](https://www.facebook.com/61576784244853/videos/emergency-crews-responded-earlier-this-morning-to-a-rollover-crash-near-independ/1202790165167646/) - Emergency crews responded earlier this morning to a rollover crash near Independence Avenue and Van ...

44. [Kansas City & Surrounding Areas Crime Watch - Facebook](https://www.facebook.com/groups/2050778525238155/) - The Kansas City Missouri Police Department partners with CrimeReports.com to bring residents the lat...

45. [Kansas City Crime Alert | Facebook](https://www.facebook.com/groups/242073486345760/) - This group is a group designed to alert the community of any criminal activity happening in our awes...

46. [Crime and Public Safety in Kansas City - Facebook](https://www.facebook.com/groups/1265362313948851/posts/2085273508624390/) - Read this thug story of an armed carjacking just north of Loose Park in broad daylight. This is anot...

47. [Historic Northeast Crime Watch and Reporting Page - Facebook](https://www.facebook.com/groups/137269919805399/) - This group is for residents and property owners in the Historic Northeast (HNE) neighborhoods of KAN...

48. [West Plaza Watch | Facebook](https://www.facebook.com/groups/245765465446263/) - This group was created to promote safety in the neighborhood. Residents are encouraged to communicat...

49. [Unofficial Old Hyde Park Neighborhood Watch | Facebook](https://www.facebook.com/groups/443409465719196/) - Our annual Wanderfest KC Neighborhood festival is less than 2 weeks away! Mark your calendars! Fb ev...

50. [Kansas City Missouri Police Department - Facebook](https://www.facebook.com/kcpolice/) - Welcome to the official Kansas City Missouri Police Department Facebook Page. 󱞴 Government organizat...

51. [In 2025, 68 people lost their lives in crashes on Kansas City's ...](https://www.facebook.com/kcpolice/posts/in-2025-68-people-lost-their-lives-in-crashes-on-kansas-citys-roadways-many-rela/1290704693098054/) - In 2025, 68 people lost their lives in crashes on Kansas City's roadways, many related to speeding a...

52. [This is Kansas City's 11th traffic fatality of 2026. STORY >>> https ...](https://www.facebook.com/KCTV5/posts/this-is-kansas-citys-11th-traffic-fatality-of-2026story-httpswwwkctv5com20260228/1349701307202831/) - 1 dead, 2 injured in Christian County crash on U.S. 65 By KY3 Staff Published: Mar. 6, 2026 CHRISTIA...

53. [Five people died and 87 were injured in 187 traffic crashes during ...](https://www.facebook.com/motrooper/posts/five-people-died-and-87-were-injured-in-187-traffic-crashes-during-the-2026-new-/1186169447022823/) - Five people died and 87 were injured in 187 traffic crashes during the 2026 New Year's holiday count...

54. [A man died early Tuesday morning at a hospital from injuries ...](https://www.facebook.com/KSHB41/posts/a-man-died-early-tuesday-morning-at-a-hospital-from-injuries-suffered-in-a-dec-2/1302702535234860/) - A man died early Tuesday morning at a hospital from injuries suffered in a Dec. 28, 2025, crash in K...

55. [Kansas City (@KansasCity) / Posts / X - Twitter](https://x.com/KansasCity) - Official account for the City of Kansas City, Missouri. Follows & RT's are not endorsements. Service...

56. [Public Safety Task Force - City of Kansas City](https://www.kcmo.gov/city-hall/departments/health/public-safety-task-force) - The Public Safety Task Force is responsible for investigating and addressing various issues involvin...

57. [kcpolice (@kcpolice) / Posts / X - Twitter](https://x.com/kcpolice) - Our mission: To protect and serve with professionalism, honor and integrity. Not monitored 24/7. Cal...

58. [The Kansas City Star (@KCStar) / Posts / X - Twitter](https://x.com/KCStar) - The Kansas City Star (@KCStar) - Posts - Breaking the news in Kansas City since 1880 ... Location: K...

59. [r/kansascity - Reddit](https://www.reddit.com/r/kansascity/) - r/kansascity: Welcome to r/KansasCity. This is a subreddit for Kansas City, Missouri, and surroundin...

60. [r/kcmo - Reddit](https://www.reddit.com/r/kcmo/) - Community Info Section. Kansas City, Missouri, on Reddit. A discussion area for locals. Keep it civi...

61. [r/KansasCityKansas - Reddit](https://www.reddit.com/r/KansasCityKansas/) - r/KansasCityKansas: For residents of and visitors to KCK.

62. [Subreddits related to KC : r/kansascity](https://www.reddit.com/r/kansascity/comments/1hi0eei/subreddits_related_to_kc/) - Here are some other subreddits related to KC we are trying to build up. r/Missouri for state-wide ne...

63. [Nextdoor: Neighborhood Network - Apps on Google Play](https://play.google.com/store/apps/details?id=com.nextdoor&hl=en_US) - Nextdoor is the leading local community platform for staying informed, getting local news and alerts...

64. [Public Agency Alerts - Neighbor help - Nextdoor](https://help.nextdoor.com/s/article/About-Emergency-Alerts) - Emergency Alerts are a special type of post available to Public Agencies that reaches Nextdoor membe...

65. [About the Nextdoor Alerts Map - Neighbor help](https://help.nextdoor.com/s/article/About-the-Nextdoor-Alerts-Map) - The Nextdoor Alerts Map displays real-time information to help you stay safe and prepared. From ever...

66. [Nextdoor, a networking platform for neighborhoods, ranked the 20 ...](https://www.facebook.com/kansascitystar/posts/nextdoor-a-networking-platform-for-neighborhoods-ranked-the-20-friendliest-kansa/940772008473659/) - Nextdoor, a networking platform for neighborhoods, ranked the 20 friendliest Kansas City neighborhoo...

67. [Power Outage Map - Evergy](https://www.evergy.com/outages/outage-map) - The outage map lets you see outages, report an outage or find an estimated restoration time.

68. [Evergy Power Outages - Live Outage Map & Current Status](https://usoutage.com/evergy/) - Up-to-date outage information for Evergy. Track current power outages affecting Evergy customers acr...

69. [Establishment Search | Occupational Safety and Health ... - OSHA](https://www.osha.gov/ords/imis/establishment.html) - Use our establishment search to locate OSHA enforcement inspections by establishment name. You can a...

70. [Accident Search Results | Occupational Safety and Health ... - OSHA](https://www.osha.gov/ords/imis/accidentsearch.search) - Accident Search Results. Description, Abstract, Keyword, SIC, NAICS, Event Date Range, OSHA Office, ...

71. [OSHA fines company whose worker died in Kansas City, Kan ...](https://www.kshb.com/news/local-news/kansas/wyandotte-county/repeat-violator-osha-fines-company-where-worker-died-in-kck-trench-collapse) - Safety regulators fined a Johnson County-based company, K&W Underground, for violations in a deadly ...

72. [OSHA fines company whose worker died in Kansas City ... - YouTube](https://www.youtube.com/watch?v=bYVMpFfrIFQ) - OSHA fines company whose worker died in Kansas City, Kan., trench collapse.

73. [Case Information and Records Requests - City of Kansas City](https://www.kcmo.gov/city-hall/departments/municipal-court/case-information-and-records) - You can find most case records and information online at MissouriCase.Net. Go to Look Up Ticket for ...

74. [Access Your Case Docket With Missouri Case.Net](https://www.lsmo.org/page/724/access-your-case-docket-missouri-casenet) - Case.net allows you to inquire about case records including docket entries, parties, judgments and c...

75. [Public Access to Court Electronic Records | PACER: Federal Court ...](https://pacer.uscourts.gov) - PACER provides information about accessing and filing federal court records electronically. Find res...

76. [Missouri Western District Court | PACER: Federal Court Records](https://pacer.uscourts.gov/file-case/court-cmecf-lookup/court/MOWDC) - The purpose of this site is to provide information about locating and filing cases in the federal co...

77. [Parents of girl who drowned at Kansas City water park file lawsuit](https://apnews.com/article/water-park-drowning-lawsuit-kansas-city-9d3b3f912c6db7ace83fd796d46a7412) - The parents of a 6-year-old girl who drowned at a popular Kansas City water park last year allege in...

78. [Parents of girl who drowned at Kansas City water park file lawsuit](https://molawyersmedia.com/2023/06/15/parents-of-girl-who-drowned-at-kansas-city-water-park-file-lawsuit/) - Their daughter, Adeline Stewart, died at a Kansas City hospital days after she was pulled from the C...

79. [Parents sue Kansas City waterpark over daughter's drowning ...](https://www.foxnews.com/us/parents-sue-kansas-city-waterpark-daughters-drowning-blaming-incompetent-lifeguards) - Therron and Debra Stewart of Grandview, Missouri, are suing Kansas City's Oceans of Fun waterpark ov...

80. [Kansas City Swimming Pool Accident Attorney](https://www.sjblaw.com/swimming-pool-accident/) - Have you or a loved one been injured in a swimming pool accident in Kansas City? Call Shamberg, John...

81. [Teens denied pool access to Lee's Summit Waves after rental, city ...](https://www.reddit.com/r/kansascity/comments/wj8yc3/teens_denied_pool_access_to_lees_summit_waves/) - 250 kids at a pool for $2k sounds like a hellish lawsuit when one of the kids cracks his skull open ...

82. [Kansas City Star (@thekansascitystar) | TikTok](https://www.tiktok.com/@thekansascitystar) - Kansas City Star (@thekansascitystar) on TikTok | 3.3M Likes. 94.5K Followers. Telling Kansas City's...

83. [KC Discover (@kansascitydiscover) - TikTok](https://www.tiktok.com/@kansascitydiscover) - KC Discover (@kansascitydiscover) on TikTok | 1.9M Likes. 61.5K Followers. Kansas City | Physical Ed...

84. [Kansas City Star - YouTube](https://www.youtube.com/KansasCityStarVideo) - The official video channel of The Kansas City Star. Kansas City's best source for local news, sports...

85. [Browse Kansas City Discord Servers](https://discords.com/servers/tags/Kansas%20City) - Browse and Search for Kansas City Discord Servers. Find millions of Kansas City Discord servers usin...

86. [Have a local Discord/group chat you'd like to share? Post it here!](https://www.reddit.com/r/PokemonGoKC/comments/awq3yh/have_a_local_discordgroup_chat_youd_like_to_share/) - Have a local Discord/group chat you'd like to share? Post it here!

87. [kc-open-data-library - Kansas City - GitHub](https://github.com/codeforkansascity/kc-open-data-library) - A inventory of open data in the Kansas City Area. To view the entire collection go to the WIKI. Cate...

88. [In 2025, 24 people died in Missouri work zone crashes. Another 110 ...](https://www.facebook.com/KCTV5/posts/in-2025-24-people-died-in-missouri-work-zone-crashes-another-110-suffered-seriou/1406991611473800/) - In 2025, 24 people died in Missouri work zone crashes. Another 110 suffered serious injuries. Missou...

