export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}>
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
            Energy Bill Calculator: Calculate Your Monthly Energy Costs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding your energy costs is essential for effective household budgeting and identifying savings opportunities. An energy bill calculator provides a detailed breakdown of your gas and electricity expenses, helping you see exactly where your energy spending goes and how you can reduce it without compromising comfort.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20300%22%20fill%3D%22none%22%3E%3Crect%20width%3D%22600%22%20height%3D%22300%22%20rx%3D%2212%22%20fill%3D%22%23D97706%22%20opacity%3D%220.08%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22520%22%20height%3D%22220%22%20rx%3D%228%22%20fill%3D%22%23D97706%22%20opacity%3D%220.12%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22140%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22bold%22%20fill%3D%22%23D97706%22%3EEnergy%20Bill%20Calculator%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22180%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2216%22%20fill%3D%22%23D97706%22%20opacity%3D%220.8%22%3ECalculate%20Your%20Monthly%20Energy%20Costs%3C%2Ftext%3E%3Crect%20x%3D%22220%22%20y%3D%22210%22%20width%3D%22160%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%23D97706%22%20opacity%3D%220.2%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22234%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23D97706%22%3EComing%20Soon%3C%2Ftext%3E%3C%2Fsvg%3E"
            alt="energy bill calculator illustration"
            width={600}
            height={300}
            className="rounded-lg w-full max-w-lg"
          />
        </div>

        <article className="space-y-8">

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            How an Energy Bill Calculator Estimates Your Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            An energy bill calculator uses your property details, occupancy patterns, and appliance usage to estimate your monthly gas and electricity costs. By inputting information about your home's size, insulation quality, heating system type, and the number of occupants, the calculator can predict your consumption patterns. It applies your current tariff rates including unit costs and standing charges to produce an accurate monthly estimate. This helps you understand whether you are paying more than average and where the biggest opportunities for savings lie. A reliable <strong>energy bill calculator</strong> accounts for seasonal variations, showing how your costs change between summer and winter months.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Understanding Your Electricity Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Electricity powers your lighting, appliances, entertainment systems, and potentially your heating and hot water. The average UK household uses around 2,900 kWh of electricity per year, costing approximately 870 pounds at current rates. However, actual usage varies enormously depending on whether you have an electric vehicle, use electric heating, work from home, or have energy-hungry appliances like tumble dryers and electric ovens. Your energy bill calculator helps you understand which appliances contribute most to your electricity bill, allowing you to make informed decisions about usage patterns and potential upgrades to more efficient models.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Understanding Your Gas Costs
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            For most UK homes, gas is the primary fuel for central heating and hot water, and often for cooking too. The average household uses approximately 12,000 kWh of gas annually, though this varies significantly with property size and insulation quality. Heating typically accounts for over 60 percent of a household's total energy use, making it the single biggest area where savings can be achieved. Improving insulation, servicing your boiler regularly, using a programmable thermostat, and reducing your thermostat setting by just one degree can all reduce gas consumption. An energy bill calculator helps quantify the potential savings from each of these measures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Comparing Energy Tariffs and Finding Better Deals
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            One of the most effective ways to reduce your energy bills is switching to a more competitive tariff. Fixed-rate tariffs provide price certainty for a set period, while variable tariffs fluctuate with market prices. Economy 7 and Economy 10 tariffs offer cheaper electricity during off-peak hours, which can benefit households that can shift usage to overnight periods. Your energy bill calculator results help you determine which tariff structure would be most cost-effective for your specific usage pattern. Comparing deals regularly and switching when better options are available can save hundreds of pounds per year without any change in energy consumption.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Practical Ways to Lower Your Energy Bills
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Beyond switching tariffs, there are numerous practical steps to reduce your energy consumption. Upgrading to LED lighting throughout your home can save 40 pounds or more per year. Using a smart thermostat can reduce heating costs by 10 to 15 percent by learning your schedule and heating your home only when needed. Draught-proofing windows and doors, adding loft insulation, and upgrading cavity wall insulation all reduce heat loss and lower gas bills. Simple habits like turning off appliances at the wall rather than leaving them on standby, washing clothes at 30 degrees, and only boiling the water you need in the kettle all contribute to lower energy bills over time.
          </p>
        </section>
        </article>

        <section className="mt-12 p-6 rounded-lg" style={{ background: "color-mix(in srgb, var(--accent) 5%, transparent)" }}>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Related UK Calculators
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Explore our other free calculators to help manage your household finances:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://gasratecalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Gas Rate Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate gas appliance heat input (kW)</span>
            </a>
            <a href="https://watersavingcalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Water Saving Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Estimate water usage and savings</span>
            </a>
            <a href="https://watermetercalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Water Meter Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Track and calculate water meter readings</span>
            </a>
            <a href="https://utilitybillcalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Utility Bill Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Estimate combined utility costs</span>
            </a>
            <a href="https://mortgagecalculator.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Mortgage Calculator</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Calculate monthly mortgage payments</span>
            </a>
            <a href="https://homeinsurance.quest" className="block p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900 dark:text-white">Home Insurance</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Compare home insurance quotes</span>
            </a>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="h-1 w-24 mx-auto rounded mb-6" style={{ background: "var(--accent)" }} />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Energy Bill Calculator. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
