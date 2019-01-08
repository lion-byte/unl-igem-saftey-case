import React from 'react'

const Home = props => {
  return (
    <div>
      <section>
        <h2 id='introduction'>Introduction</h2>
        <p>
          With a field like synthetic biology making leaps and bounds every year
          towards a realization of industrial and commercial use, safety is at
          the forefront of the minds of individuals deciding whether to start
          incorporating genetically modified organisms into their daily
          routines. People want to be certain that this new and exciting
          opportunity will be safe for both them and their community. Synthetic
          biologists are no strangers to safety themselves while working with
          biohazardous materials and inside high-tech biology labs, but
          sometimes the safety of the end-goal, products, and processes utilized
          by people every day can elude even the most well-thought-out projects.
          This page hopes to help these projects work towards a safe
          implementation by logically breaking down and analyzing their safety
          concerns using Safety Cases (Cohen et al, 2016).
        </p>
        <p>
          Safety Cases take their design strategy from the aeronautics and
          software engineering communities (Kelly and Weaver, 2004) where they
          can also be seen under the title Assurance Arguments using Goal
          Structuring Notation (GSN). There they are used to ensure the safety
          of various parts of the aircraft and target certain problem areas in
          the functions and dangers of the process of flight. Unlike
          aeronautics, synthetic biologists do not have to worry about engine
          and wing design or console displays, but they do have to worry about
          accidental release of bacteria and plasmid conjugation as well as
          other concerns. As synthetic biology grows to new heights and levels
          of complexity, the number of safety concerns a single project or
          application needs to address will also grow. Just as people trust the
          engineering of an airplane despite the many risks, Safety Cases can
          help people who use genetically modified organisms feel confident that
          what they are using is safe.
        </p>
        <h3 id='safety-case-units-and-structure'>
          Safety Case Units and Structure
        </h3>
        <p>
          Safety Cases use an organized combination of structural units to help
          build arguments that prove the root goal of a project is safe. These
          units include Goal, Strategy, Context, Justification, Assumption, and
          Solution (Kelly and Weaver, 2004). Each safety case begins with a
          single root <strong>Goal</strong> (usually stating that some project
          is safe) with Context units for the intended environmental conditions
          of the organism and the species and strain of the organism in use.
        </p>
        <p>
          A <strong>Strategy</strong> is then used to break that Goal down into
          smaller sub-Goals that each address a aspect of the project. (Many
          times, one can’t explore all of the identified hazards in a situation.
          In this case, one would use a diamond (mentioned below) to symbolize
          the fact that there may be things in this area that need to be
          considered further.).
        </p>
        <p>
          <strong>Justifications</strong> can be used to provide reasoning for a
          certain Strategy or Goal by reminding the viewer of certain facts
          established elsewhere. If a Strategy is “Argument over kill-switch
          parts” and is used with the Goal “Organism is safe in case of
          accidental release” and a sub-Goal “Organism is killed in the presence
          of 0.5 mM of HCl”, a Justification could further enhance the sub-Goal
          by stating “0.5 mM of HCl is not found in the intended environment”.
          Likewise, <strong>Assumptions</strong> can be used to narrow the scope
          of a Strategy or Goal. A good use of the Assumptions might be to state
          that one is assuming that some toxic chemical is not going to be added
          to the intended environment. One should also include these parameters
          in the initial Context units at the root of the Safety Case.
        </p>
        <p>
          <strong>Solutions</strong> are used to provide closure to Goals, their
          parent-Goals, and Safety Cases themselves. They can take the form of
          experimental data, modeling data, etc. The specific type of Solution
          that should be used is determined by the Goal they are solving and
          ultimately, the person filling out the Safety Case.
        </p>
        <p>
          If a creator of a Safety Case wishes to convey that a certain Goal or
          Strategy is not fully developed and needs more consideration before
          finalization, they attach a <strong>diamond</strong> onto the unit. A
          diamond on a Goal can denote a need to think of more Strategies, and a
          diamond on a Strategy can denote a need to think of more sub-Goals.
          Diamonds do not necessarily mean that a creator did not think about a
          branch of a Safety Case. It only means that the creator of the Safety
          Case is addressing a need for more consideration.
        </p>
      </section>

      <section>
        <h2 id='acknowledgment'>Acknowledgment</h2>
        <p>This work is supported in part by:</p>
        <ul>
          <li>National Science Foundation, grant CCF-1745775</li>
          <li>National Institute of Justice, grant 2016-R2-CX-0023</li>
        </ul>
        <p>
          Any opinions, findings, and conclusions or recommendations expressed
          in this material are those of the author(s) and do not necessarily
          reflect the views of any of the foundations/institutes above.
        </p>

        <div>
          <img
            src='/img/nsf-logo.png'
            alt='National Science Foundation Logo'
            width='128'
            height='128'
          />
          <img
            src='/img/nij-logo.png'
            alt='National Institute of Justice Logo'
            width='128'
            height='128'
          />
        </div>
      </section>

      <section>
        <h2>Collaboration</h2>
        <p>
          If your team chooses to create a safety case, place this badge in your
          wiki along with an image of your safety case.
        </p>
        <img
          src='/img/badge.png'
          alt='UNL iGEM Collaboration 2018 Badge'
          width='256'
          height='256'
        />
      </section>
    </div>
  )
}

export default Home