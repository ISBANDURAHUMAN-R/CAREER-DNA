const CDNA_TRAITS = [
  'logicalReasoning','numericalReasoning','verbalReasoning','spatialReasoning','creativity','analysis','curiosity','investigation','communication','empathy','leadership','collaboration','independence','organization','attentionToDetail','riskTolerance','practicalAbility','scientificThinking','artisticExpression','helpingOrientation','persuasion','technicalInterest','businessOrientation','researchOrientation','patience','adaptability','decisionMaking','innovation','socialInteraction','visualThinking'
];

const CDNA_QUESTIONS = [
{ id:'q01', text:'You are handed a problem nobody has solved before. What pulls you in first?', answers:[
 {id:'a',icon:'🧩',title:'Break it into rules and patterns',desc:'Find structure before acting.',traits:{logicalReasoning:3,analysis:2,organization:1}},
 {id:'b',icon:'🔬',title:'Start investigating why it happens',desc:'Questions first, answers later.',traits:{curiosity:2,investigation:3,researchOrientation:2}},
 {id:'c',icon:'🎨',title:'Imagine several unusual ways around it',desc:'Explore possibilities before constraints.',traits:{creativity:3,innovation:2,visualThinking:1}},
 {id:'d',icon:'🛠️',title:'Try something practical and learn from it',desc:'Experiment beats overthinking.',traits:{practicalAbility:3,adaptability:2,riskTolerance:1}},
 {id:'e',icon:'🤝',title:'Find out who is affected and what they need',desc:'The human side changes the solution.',traits:{empathy:3,communication:2,helpingOrientation:2}}
]},
{ id:'q02', text:'Which free afternoon would feel most satisfying?', answers:[
 {id:'a',icon:'📊',title:'Solve puzzles, analyze numbers or strategy games',desc:'A challenge with a right-ish answer.',traits:{logicalReasoning:2,numericalReasoning:3,analysis:2}},
 {id:'b',icon:'✍️',title:'Write, debate, explain or tell a story',desc:'Working with ideas and words.',traits:{verbalReasoning:3,communication:2,persuasion:1}},
 {id:'c',icon:'🎨',title:'Make something visual or artistic',desc:'Create something people can see or feel.',traits:{creativity:3,artisticExpression:3,visualThinking:2}},
 {id:'d',icon:'🌿',title:'Explore a place, experiment or observe nature',desc:'Learn by experiencing the world.',traits:{curiosity:3,scientificThinking:2,adaptability:2}},
 {id:'e',icon:'👥',title:'Help someone, organize a group or teach',desc:'People and progress together.',traits:{helpingOrientation:3,socialInteraction:2,leadership:2}}
]},
{ id:'q03', text:'A plan suddenly stops working. Your natural response is to…', answers:[
 {id:'a',icon:'🔎',title:'Trace exactly where the failure began',desc:'Find the root cause.',traits:{analysis:3,attentionToDetail:2,investigation:2}},
 {id:'b',icon:'🔁',title:'Change direction quickly',desc:'Adapt and keep moving.',traits:{adaptability:3,decisionMaking:2,riskTolerance:1}},
 {id:'c',icon:'💡',title:'Redesign the approach from scratch',desc:'The failure may reveal a better idea.',traits:{creativity:2,innovation:3,independence:1}},
 {id:'d',icon:'🗣️',title:'Bring the right people together',desc:'Get perspectives before choosing.',traits:{collaboration:3,communication:2,leadership:1}},
 {id:'e',icon:'🧘',title:'Stay patient and work through it carefully',desc:'Steady progress beats panic.',traits:{patience:3,organization:2,attentionToDetail:2}}
]},
{ id:'q04', text:'Which kind of achievement feels most rewarding?', answers:[
 {id:'a',icon:'🏗️',title:'Building something that actually works',desc:'A useful result you can touch or run.',traits:{practicalAbility:3,technicalInterest:2,innovation:1}},
 {id:'b',icon:'🧠',title:'Understanding something others missed',desc:'The insight is the reward.',traits:{researchOrientation:3,analysis:2,curiosity:2}},
 {id:'c',icon:'✨',title:'Creating something memorable',desc:'A strong original expression.',traits:{creativity:3,artisticExpression:2,visualThinking:2}},
 {id:'d',icon:'❤️',title:'Helping someone make real progress',desc:'Impact on a person matters most.',traits:{empathy:3,helpingOrientation:3,communication:1}},
 {id:'e',icon:'🚀',title:'Turning an idea into a successful venture',desc:'Opportunity, ownership and results.',traits:{businessOrientation:3,persuasion:2,riskTolerance:2}}
]},
{ id:'q05', text:'Someone strongly disagrees with your idea. What do you naturally do?', answers:[
 {id:'a',icon:'🗣️',title:'Ask questions and explain your reasoning',desc:'Understand, then persuade if needed.',traits:{communication:3,verbalReasoning:2,persuasion:2}},
 {id:'b',icon:'🤝',title:'Look for a solution both sides can support',desc:'Agreement is part of the solution.',traits:{empathy:2,collaboration:3,adaptability:1}},
 {id:'c',icon:'📚',title:'Look for evidence that can settle the issue',desc:'Let the information decide.',traits:{analysis:3,investigation:2,scientificThinking:2}},
 {id:'d',icon:'🧭',title:'Stand by it unless a better argument appears',desc:'Independent, but not stubborn.',traits:{independence:3,decisionMaking:2,logicalReasoning:1}},
 {id:'e',icon:'⚡',title:'Test both ideas in practice',desc:'Results can settle debates quickly.',traits:{practicalAbility:2,riskTolerance:2,adaptability:2}}
]},
{ id:'q06', text:'You receive a vague task with almost no instructions. What is your first move?', answers:[
 {id:'a',icon:'🧱',title:'Define the goal and break it into steps',desc:'Create structure from ambiguity.',traits:{organization:3,logicalReasoning:2,independence:2}},
 {id:'b',icon:'❓',title:'Ask questions until the real problem is clear',desc:'Clarify before committing.',traits:{curiosity:2,communication:2,investigation:3}},
 {id:'c',icon:'🧪',title:'Make a small prototype',desc:'Use something tangible to discover the direction.',traits:{practicalAbility:3,innovation:2,adaptability:2}},
 {id:'d',icon:'🎯',title:'Choose a direction and own the decision',desc:'Progress needs a starting point.',traits:{leadership:2,decisionMaking:3,riskTolerance:1}},
 {id:'e',icon:'🗺️',title:'Sketch several possible approaches',desc:'Compare possibilities before selecting one.',traits:{creativity:3,visualThinking:2,analysis:1}}
]},
{ id:'q07', text:'Which problem would you willingly spend hours investigating?', answers:[
 {id:'a',icon:'🔬',title:'Why an experiment produced a strange result',desc:'Unexpected evidence is interesting.',traits:{scientificThinking:3,curiosity:2,investigation:2}},
 {id:'b',icon:'🕵️',title:'What caused a complicated incident',desc:'Follow clues until the story makes sense.',traits:{investigation:3,analysis:3,attentionToDetail:1}},
 {id:'c',icon:'🏙️',title:'How to make a place or system work better',desc:'Improve the real world around you.',traits:{spatialReasoning:2,practicalAbility:2,innovation:2}},
 {id:'d',icon:'📈',title:'Why a business or market changed',desc:'Patterns, incentives and decisions.',traits:{numericalReasoning:2,businessOrientation:3,analysis:2}},
 {id:'e',icon:'🧑‍🤝‍🧑',title:'Why people behave or respond differently',desc:'Understand people beneath the surface.',traits:{empathy:2,socialInteraction:3,curiosity:2}}
]},
{ id:'q08', text:'When learning something difficult, which approach feels most natural?', answers:[
 {id:'a',icon:'📖',title:'Read deeply until the concept clicks',desc:'Build a strong mental model.',traits:{researchOrientation:3,patience:2,verbalReasoning:1}},
 {id:'b',icon:'🛠️',title:'Build or practice while learning',desc:'Hands-on repetition makes it stick.',traits:{practicalAbility:3,technicalInterest:2,adaptability:1}},
 {id:'c',icon:'🎥',title:'See diagrams, examples and demonstrations',desc:'Visual context makes it clear.',traits:{visualThinking:3,spatialReasoning:2,creativity:1}},
 {id:'d',icon:'👥',title:'Discuss it with someone',desc:'Conversation helps ideas connect.',traits:{communication:3,collaboration:2,socialInteraction:2}},
 {id:'e',icon:'🧩',title:'Break it into smaller logical pieces',desc:'Master one layer at a time.',traits:{logicalReasoning:3,organization:2,attentionToDetail:1}}
]},
{ id:'q09', text:'Which environment would keep you engaged for a long project?', answers:[
 {id:'a',icon:'🧪',title:'A lab, workshop or field setting',desc:'Things happen in the real world.',traits:{practicalAbility:2,scientificThinking:2,adaptability:2}},
 {id:'b',icon:'💻',title:'A focused workspace with deep independent work',desc:'Quiet concentration and ownership.',traits:{independence:3,patience:2,technicalInterest:1}},
 {id:'c',icon:'🎭',title:'A creative studio with frequent iteration',desc:'Ideas evolve through making.',traits:{creativity:3,artisticExpression:2,visualThinking:2}},
 {id:'d',icon:'🏢',title:'A collaborative team with lots of discussion',desc:'Energy comes from people and exchange.',traits:{collaboration:3,socialInteraction:3,communication:2}},
 {id:'e',icon:'🌍',title:'A changing environment with new problems',desc:'Routine would drain the energy.',traits:{adaptability:3,curiosity:2,riskTolerance:2}}
]},
{ id:'q10', text:'A deadline is close and several tasks compete for attention. You…', answers:[
 {id:'a',icon:'📋',title:'Prioritize, schedule and execute',desc:'Order reduces pressure.',traits:{organization:3,decisionMaking:2,patience:1}},
 {id:'b',icon:'🔥',title:'Take the highest-impact risk first',desc:'Move the biggest lever.',traits:{riskTolerance:3,decisionMaking:3,businessOrientation:1}},
 {id:'c',icon:'🔍',title:'Check what could go wrong before committing',desc:'Avoid preventable mistakes.',traits:{attentionToDetail:3,analysis:2,patience:1}},
 {id:'d',icon:'🤝',title:'Delegate and coordinate people',desc:'Use the team efficiently.',traits:{leadership:3,collaboration:2,communication:2}},
 {id:'e',icon:'⚙️',title:'Work on whichever task creates momentum',desc:'Keep adapting to what changes.',traits:{adaptability:3,practicalAbility:2,independence:1}}
]},
{ id:'q11', text:'If you had to explain a complicated idea to a beginner, what would you do?', answers:[
 {id:'a',icon:'🧱',title:'Build it from simple principles',desc:'One layer at a time.',traits:{verbalReasoning:2,logicalReasoning:2,patience:2}},
 {id:'b',icon:'🖼️',title:'Use an analogy or visual',desc:'Make the abstract concrete.',traits:{communication:2,visualThinking:3,creativity:2}},
 {id:'c',icon:'🎤',title:'Tell a clear story around it',desc:'Context makes information memorable.',traits:{verbalReasoning:3,communication:3,persuasion:1}},
 {id:'d',icon:'🧪',title:'Demonstrate it',desc:'Let them see it happen.',traits:{practicalAbility:3,adaptability:1,communication:2}},
 {id:'e',icon:'❓',title:'Ask what they already understand',desc:'Adapt the explanation to the person.',traits:{empathy:3,communication:2,adaptability:2}}
]},
{ id:'q12', text:'You notice a tiny inconsistency that nobody else seems to care about. You…', answers:[
 {id:'a',icon:'🔎',title:'Investigate it',desc:'Small clues can reveal bigger issues.',traits:{attentionToDetail:3,investigation:2,curiosity:1}},
 {id:'b',icon:'➡️',title:'Ignore it if it does not affect the outcome',desc:'Focus on what matters most.',traits:{decisionMaking:2,adaptability:2,businessOrientation:1}},
 {id:'c',icon:'🛠️',title:'Fix it immediately',desc:'Why leave a known problem?',traits:{practicalAbility:2,attentionToDetail:3,organization:1}},
 {id:'d',icon:'🧠',title:'Wonder what caused it',desc:'The inconsistency is a clue.',traits:{analysis:3,scientificThinking:2,curiosity:2}},
 {id:'e',icon:'🎨',title:'Think about whether it changes the experience',desc:'Details matter when people notice them.',traits:{visualThinking:2,creativity:2,empathy:2}}
]},
{ id:'q13', text:'Which kind of responsibility would you be comfortable owning?', answers:[
 {id:'a',icon:'👑',title:'Making the final call',desc:'Accountability comes with authority.',traits:{leadership:3,decisionMaking:3,riskTolerance:1}},
 {id:'b',icon:'🧭',title:'Owning a complex problem from start to finish',desc:'Independence and depth.',traits:{independence:3,organization:2,logicalReasoning:1}},
 {id:'c',icon:'❤️',title:'Supporting people through a difficult process',desc:'Trust and care matter.',traits:{helpingOrientation:3,empathy:3,patience:1}},
 {id:'d',icon:'📣',title:'Representing an idea and winning support',desc:'Influence and communication.',traits:{persuasion:3,communication:3,businessOrientation:1}},
 {id:'e',icon:'🔬',title:'Protecting the quality and accuracy of the work',desc:'Standards matter.',traits:{attentionToDetail:3,researchOrientation:2,patience:2}}
]},
{ id:'q14', text:'Which statement sounds most like your idea of a good day at work?', answers:[
 {id:'a',icon:'💡',title:'I made something new',desc:'Progress through creation.',traits:{creativity:3,innovation:3,artisticExpression:1}},
 {id:'b',icon:'📊',title:'I solved a difficult problem',desc:'Progress through reasoning.',traits:{logicalReasoning:3,analysis:3,technicalInterest:1}},
 {id:'c',icon:'🤝',title:'I helped people move forward',desc:'Progress through people.',traits:{helpingOrientation:3,empathy:2,communication:2}},
 {id:'d',icon:'📈',title:'I improved a result or opportunity',desc:'Progress through impact.',traits:{businessOrientation:3,persuasion:2,decisionMaking:2}},
 {id:'e',icon:'🔭',title:'I learned something genuinely new',desc:'Progress through discovery.',traits:{curiosity:3,researchOrientation:3,scientificThinking:1}}
]},
{ id:'q15', text:'How do you usually react to uncertainty?', answers:[
 {id:'a',icon:'🧭',title:'I become curious',desc:'Unknown means something to explore.',traits:{curiosity:3,investigation:2,riskTolerance:1}},
 {id:'b',icon:'📐',title:'I create a plan and reduce it',desc:'Structure makes uncertainty manageable.',traits:{organization:3,analysis:2,decisionMaking:1}},
 {id:'c',icon:'🚀',title:'I am comfortable moving without all the answers',desc:'You can learn while moving.',traits:{riskTolerance:3,adaptability:3,independence:1}},
 {id:'d',icon:'👥',title:'I talk it through with others',desc:'Shared context reduces ambiguity.',traits:{collaboration:3,communication:2,socialInteraction:2}},
 {id:'e',icon:'🧪',title:'I run a small test',desc:'Evidence beats speculation.',traits:{scientificThinking:3,practicalAbility:2,analysis:2}}
]},
{ id:'q16', text:'Which kind of challenge sounds most satisfying?', answers:[
 {id:'a',icon:'📐',title:'Designing a structure that must fit together',desc:'Precision plus spatial thinking.',traits:{spatialReasoning:3,logicalReasoning:2,attentionToDetail:2}},
 {id:'b',icon:'🧑‍⚕️',title:'Helping someone solve a personal difficulty',desc:'Human outcomes matter.',traits:{empathy:3,helpingOrientation:3,verbalReasoning:1}},
 {id:'c',icon:'💼',title:'Finding an opportunity others overlooked',desc:'Value, persuasion and timing.',traits:{businessOrientation:3,persuasion:2,curiosity:2}},
 {id:'d',icon:'🎬',title:'Creating an experience people remember',desc:'Emotion, story and craft.',traits:{artisticExpression:3,creativity:3,visualThinking:2}},
 {id:'e',icon:'🧮',title:'Finding the answer hidden in complex information',desc:'Signal inside noise.',traits:{numericalReasoning:3,analysis:3,researchOrientation:1}}
]},
{ id:'q17', text:'When working with others, what role do you naturally take?', answers:[
 {id:'a',icon:'🧭',title:'Set direction and keep momentum',desc:'Make the group move.',traits:{leadership:3,decisionMaking:2,persuasion:1}},
 {id:'b',icon:'🧩',title:'Solve the hardest piece',desc:'Contribute depth where it matters.',traits:{logicalReasoning:2,independence:3,technicalInterest:2}},
 {id:'c',icon:'🌉',title:'Connect different viewpoints',desc:'Help people understand each other.',traits:{communication:3,empathy:2,collaboration:3}},
 {id:'d',icon:'📝',title:'Keep the details organized',desc:'Make sure nothing gets lost.',traits:{organization:3,attentionToDetail:3,patience:1}},
 {id:'e',icon:'💡',title:'Generate possibilities',desc:'Keep the idea space open.',traits:{creativity:3,innovation:2,visualThinking:1}}
]},
{ id:'q18', text:'If you could spend a month exploring one area with no grades or exams, what would you pick?', answers:[
 {id:'a',icon:'🌌',title:'Science, nature or how the world works',desc:'Understand the system underneath.',traits:{scientificThinking:3,curiosity:3,researchOrientation:2}},
 {id:'b',icon:'🏛️',title:'People, society or culture',desc:'Understand humans and communities.',traits:{socialInteraction:3,empathy:2,verbalReasoning:2}},
 {id:'c',icon:'🎨',title:'Art, design, film or storytelling',desc:'Make and interpret expression.',traits:{artisticExpression:3,creativity:3,visualThinking:2}},
 {id:'d',icon:'💰',title:'Markets, business or entrepreneurship',desc:'Understand value and decisions.',traits:{businessOrientation:3,persuasion:2,riskTolerance:2}},
 {id:'e',icon:'⚙️',title:'How machines, systems or technology work',desc:'Understand and improve tools.',traits:{technicalInterest:3,logicalReasoning:2,practicalAbility:2}}
]},
{ id:'q19', text:'A project gives you freedom but no clear path. Which part sounds best?', answers:[
 {id:'a',icon:'🗺️',title:'Defining the problem yourself',desc:'Choose what deserves attention.',traits:{independence:3,curiosity:2,decisionMaking:2}},
 {id:'b',icon:'🧠',title:'Developing the strongest solution',desc:'Go deep on the craft.',traits:{analysis:3,logicalReasoning:2,patience:2}},
 {id:'c',icon:'🌱',title:'Seeing how it could help people',desc:'Purpose shapes the work.',traits:{helpingOrientation:3,empathy:3,communication:1}},
 {id:'d',icon:'📣',title:'Getting others excited about it',desc:'Turn an idea into momentum.',traits:{persuasion:3,leadership:2,socialInteraction:2}},
 {id:'e',icon:'✨',title:'Making the final result distinctive',desc:'Craft and originality matter.',traits:{creativity:3,artisticExpression:2,attentionToDetail:2}}
]},
{ id:'q20', text:'At the end of a great career, what would you most want to be able to say?', answers:[
 {id:'a',icon:'🔬',title:'I discovered or understood something important',desc:'Knowledge was my contribution.',traits:{researchOrientation:3,scientificThinking:3,curiosity:2}},
 {id:'b',icon:'🏗️',title:'I built things that people rely on',desc:'Useful work with lasting value.',traits:{practicalAbility:3,technicalInterest:2,innovation:2}},
 {id:'c',icon:'❤️',title:'I made people’s lives better',desc:'Human impact was the point.',traits:{helpingOrientation:3,empathy:3,patience:1}},
 {id:'d',icon:'🌍',title:'I changed how people think or act',desc:'Influence and ideas mattered.',traits:{communication:3,persuasion:3,leadership:2}},
 {id:'e',icon:'🎨',title:'I created work people remember',desc:'Original expression was my legacy.',traits:{artisticExpression:3,creativity:3,visualThinking:2}}
]}
];
