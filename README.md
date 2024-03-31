 <!-- <a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="Next.js and Supabase Starter Kit - the fastest way to build apps with Next.js and Supabase" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js and Supabase Starter Kit</h1>
</a>

<p align="center">
 The fastest way to build apps with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://demo-nextjs-with-supabase.vercel.app/).

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#clone-and-run-locally).

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app -e with-supabase
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)
-->

# DropLyt
## An innovative solution to irrigation water waste.

For households across the United States, the single greatest usage of water is irrigation for lawns and gardens. Unfortunately, this usage of water also has the highest rate of wastage, with only 50% of water put towards irrigation actually making it to the plants. [[1]](https://19january2017snapshot.epa.gov/www3/watersense/pubs/outdoor.html) In order to combat this, most modern irrigation schemes introduce redundancies that further exacerbate this waste of water.

As outdoor landscaping is fairly ubiquitous throughout the United States, the carbon impact of this wastage cannot be understated. Every 1,000 gallons of water wasted amounts to 85 pounds of carbon returning to the atmosphere. [[2]](https://www.gresb.com/nl-en/water-conservation-is-critical-to-achieving-decarbonization/#:~:text=While%20the%20amount%20of%20emissions,every%201%2C000%20gallons%20of%20water.) Across the 125 million households in the United States, [[3]](https://www.census.gov/quickfacts/fact/table/US/HSD410222) an average of 25,000 gallons of water—and, therefore, 2125 pounds of carbon—are wasted every single year. [[4]](https://www.epa.gov/watersense/sprinkler-spruce-up)

Our team aims to solve this problem using a layered approach, integrating several levels of technology to reduce wastage on every step of the irrigation process.

## Step 1: Placement

Redundancy is a sizable issue in sprinkler placement. In order to prioritize soil soakage, modern irrigation systems are often placed inefficiently, resulting in the risk of overwatering and leakeage. Our system begins by addressing this issue.

When users register with our app, they begin by entering their address. We then scrape the [Nominatim API](https://nominatim.org/) with their address, retrieving their **parcel** of land, the term that encompasses the boundaries of their ownership. [[5]](https://www.unescwa.org/sd-glossary/parcel-plot#:~:text=A%20parcel%20(or%20plot)%20of,is%20known%20as%20a%20parcel.) Within this parcel, users indicate where their lawns are, which is translated to a polygon in our backend.

Armed with the information about the shape of the user's plot, our app proceeds to execute the sprinkler placement algorithm.

The algorithm starts by applying [Delaunay Triangulation](https://mathworld.wolfram.com/DelaunayTriangulation.html) to the plot, maintaining the angle of the triangles and the maximum area size of the triangles to eliminate granularity. When the plot is evenly divided into triangles, the algorithm determines the centroids of the triangles—with a little help from a polygon packing open-source package—and establishes them as the most optimal locations for the sprinklers. [[6]](https://larswander.com/art/polygon-packing/)

But wait! Centroids are typically not equidistant when triangulation is used! Therefore, our algorithm then uses a unique constrained optimization process, developed in-house, that simulates the average distribution of water around a circular sprinkler, and determines the distribution of radii to minimize overlaps and maximize coverage. 

We begin by using a normal distribution to estimate the distribution of water spewed by a sprinkler as a function of $x$ and $y$ distance from the sprinkler. [[7]](https://www.researchgate.net/publication/272493059_WATER_DISTRIBUTION_UNIFORMITY_AS_AFFECTED_BY_SPRINKLER_PERFORMANCE)



$$ \left(x,y\right)=\frac{1}{2\pi \sigma^{2}}e^{-\left(\frac{x^{2}+y^{2}}{2\sigma^{2}}\right)} $$

Of course, we are looking at an array of sprinklers. Based on the array of sprinklers and the water output, we can calculate the optimal distance the sprinklers must be from each other. Therefore, we can write a "total" function, that returns the total amount of water produced by the array of sprinklers.

$$T\left(x,y\right)=\sum_{i=0}^{k}\sum_{j=0}^{k}f\left(x+ni+qj,\ y+mj\right)$$

Here, $n$ is the horizontal distance between successive sprinklers, $m$ is the vertical distance, and $k$ is the number of sprinklers needing to be installed.

Despite our best efforts, there is bound to be some loss! We can quantify a loss function accordingly by subtracting the average of the total function from the total function and taking the absolute value.

$$ L\left(x,y\right)=\operatorname{abs}\left(T\left(x,y\right)-\frac{1}{\frac{mn}{q}\left(kn-n\right)}\int_{n}^{kn}\int_{0}^{\frac{mn}{q}}T\left(x_{1},y_{1}\right)dy_{1}dx_{1}\right) $$

Finally, we determine an area function based on our parameters,

$$A\ =\frac{mn}{q}\left(kn-n\right)$$

and we have a function to minimize,

$$
f=
\frac{\int_{n}^{kn}\int_{0}^{\frac{mn}{q}}L\left(x,y\right)dydx}{A}$$

which gives us the correct spacing and radii for the sprinklers we use!

Using this dynamic radius selection, we effectively determine the most efficient arrangement of the sprinklers to minimize wastage while maximizing coverage.

## Step 2: Timing

One of the biggest reasons that water is wasted when irrigating is the time of day that people irrigate. Our app provides the flexibility of schedule generation, informing users about the ideal time to run their sprinklers. After users determine where to place the sprinklers, the app then tells them when to run them. By selecting the time that is soon before sunrise, the water has the highest chance of being completely absorbed before evaporation can occur, while preventing fungal growth from oversaturation. [[8]](https://atpslandscaping.com/watering-grass-at-night/)

Evaporation during the day is, however, a major problem. So, we decided to tackle that too!

## Step 3: Duration

How much water is enough? Sprinklers run longer in the summer because the soil is more parched. But this is often done naively, resulting in—you guessed it—even more water wastage. [[9]](https://www.masterlawn.com/blog/signs-overwatered-lawn-how-to-restore) Therefore, the app then informs the users of the critical last step of water savings: how long to run their sprinklers for before the soil is sufficiently irrigated.

Our app introduces a novel process to compute the optimal amount of water the soil needs, therefore preventing overwatering and wastage. The app determines the **evaporative transpiration**—or the rate at which water is _leaving_ the soil and plants in the soil—at the time that the sprinklers are turned on. [[10]](https://usgs.gov/media/images/evapotranspiration-sum-plant-transpiration-and-evaporation)

Environmental scientists [Penman and Monteith](https://www.fao.org/3/x0490e/x0490e06.htm) determined a handy equation to determine the evaporative transpiration based on a series of variables, most prominently, wind speed, dew point, temperature, and past precipitation. Our app scrapes the [NWS/NOAA APIs](https://www.weather.gov/documentation/services-web-api) to extract forecast information and past data that is then fed into this equation,


$$ T\left(x,y\right)=\sum_{i=0}^{k}\sum_{j=0}^{k}f\left(x+ni+qj,\ y+mj\right) $$

which gives us a flow rate. [[11]](https://www.hec.usace.army.mil/confluence/hmsdocs/hmstrm/evaporation-and-transpiration/penman-monteith-method?selectedPageVersions=22&selectedPageVersions=23) In order to ensure the soil is sufficiently watered without overwatering, then, we simply have to match the flow rate over a set period of time.

Our app finally combines this data with plant information to determine how much water needs to be put into the soil. It then matches the flow rate of the sprinklers being installed to calculate the amount of time that the sprinklers need to be turned on. By exactly turning them on for the amount of time necessary to combat the evaporation, we essentially negate the effects of evaporation and further minimize wastage.

## What does this amount to?

As per our estimates, this system manages to save 8,000 gallons a year from the placement and 12,000 gallons a year from the timing and duration, enabling users to cut their water wastage from 25,000 gallons a year to 5,000 gallons a year, amounting to an 80% decrease in irrigation-related wastage. This is a reduction of 1700 pounds of carbon per household per year! This also reduces the overall water cost of households by over 20%, resulting in a sizable benefit for both the sustainability of the households, and their affordability.

## What's next?

Through our fullstack solution, we have demonstrated that we can engineer more sustainable water usage for residential properties. But why stop there? Water usage is substantial in [golf courses](https://www.washingtonpost.com/climate-solutions/2023/09/10/golf-sustainability-recycled-water/), [farms](https://www.agfoundation.org/questions/do-farmers-waste-water#:~:text=But%20of%20the%20water%20used,water%20returns%20to%20the%20ecosystem.), and the cherished [green architecture](https://www.nrdc.org/stories/green-infrastructure-how-manage-water-sustainable-way) that adorns so many tech campuses. 

Our solution naturally scales with only a marginal increase in computational processing. Starting from your backyard, DropLyt can potentially impact the largest areas of water wastage across the country and the globe, computationally finding the most efficient way to deliver water where it is needed.

So, let's start here. Let's think carefully about how we use water, and where we can save it. The future is in our hands. Nurture growth. Save water. **Use DropLyt!**

---
_Core technologies:_ React, TypeScript
