const articlesData = {
    "health-1": {
        id: "health-1",
        title: "The Benefits of Mediterranean Diet",
        author: "John Doe",
        date: "January 15, 2024",
        category: "Health",
        readTime: "5 min read",
        image: "images/health.jpg",
        content: `
            <p>The Mediterranean diet has long been praised as one of the healthiest eating patterns in the world. This article explores the numerous benefits and scientific evidence supporting this claim.</p>

            <h2>What is the Mediterranean Diet?</h2>
            <p>The Mediterranean diet is based on the traditional eating habits of people living in countries bordering the Mediterranean Sea. It emphasizes:</p>
            <ul>
                <li>Plenty of plant-based foods</li>
                <li>Whole grains</li>
                <li>Lean proteins</li>
                <li>Healthy fats</li>
            </ul>

            <h2>Health Benefits</h2>
            <p>Research has shown that following the Mediterranean diet can lead to numerous health benefits, including:</p>
            <ul>
                <li>Reduced risk of heart disease</li>
                <li>Better weight management</li>
                <li>Improved cognitive function</li>
                <li>Lower risk of certain cancers</li>
            </ul>`,
        tags: ["Health", "Nutrition", "Lifestyle", "Wellness"],
        relatedArticles: ["health-2", "health-3"]
    },
    "health-2": {
        id: "health-2",
        title: "The Importance of Mental Health",
        author: "Sarah Wilson",
        date: "January 18, 2024",
        category: "Health",
        readTime: "6 min read",
        image: "images/health2.jpg",
        content: `
            <p>Your mental health is an important part of your well-being. This aspect of your welfare determines how you’re able to operate psychologically, emotionally, and socially among others.</p>
            <h2>Key Aspects of Mental Health</h2>
            <ul>
                <li>Emotional well-being</li>
                <li>Psychological stability</li>
                <li>Social connections</li>
                <li>Work-life balance</li>
            </ul>
            <p>
            Your mental health is an important part of your well-being. This aspect of your welfare determines how you’re able to operate psychologically, emotionally, and socially among others.
            Considering how much of a role your mental health plays in each aspect of your life, it's important to guard and improve psychological wellness using appropriate measures.
            Because different circumstances can affect your mental health, we’ll be highlighting risk factors and signs that may indicate mental distress. But most importantly, we’ll dive into why mental health is so important.</p>
            <h2>Risk Factors for Poor Mental Health</h2>
            <p>mental health is described as a state of well-being where a person is able to cope with the normal stresses of life. This state permits productive work output and allows for meaningful contributions to society.1

However, different circumstances exist that may affect the ability to handle life’s curveballs. These factors may also disrupt daily activities, and the capacity to manage these changes. That's only one reason why mental health is so important.</p>`,
        tags: ["Health", "Mental Health", "Wellness", "Lifestyle"],
        relatedArticles: ["health-1", "health-3"]
    },
    "health-3": {
        id: "health-3",
        title: "Exercise and Its Impact on Health",
        author: "Mike Thompson",
        date: "January 20, 2024",
        category: "Health",
        readTime: "7 min read",
        image: "images/health3.jpeg",
        content: `
            <p>Regular exercise is crucial for maintaining good health. Learn about different types of exercise and their benefits.</p>

            <h2>Types of Exercise</h2>
            <ul>
                <li>Cardiovascular training</li>
                <li>Strength training</li>
                <li>Flexibility exercises</li>
                <li>Balance training</li>
            </ul>
            <p>We all know how important exercise is for keeping us physically healthy. But did you know that exercise can also help keep you mentally healthy?
                Research shows that people who exercise regularly have better mental health and emotional wellbeing, and lower rates of mental illness.
                Taking up exercise seems to reduce the risk of developing mental illness. It also seems to help in treating some mental health conditions, like depression and anxiety. For example, for mild-moderate depression, research suggests physical activity can be as effective as antidepressants or psychological treatments like cognitive behavioural therapy. Exercise can also a valuable addition to other treatment options.
            </p>
            <h2>How to get started with exercise?</h2>
            <p> It can be intimidating to start exercising if you haven’t done it in a while, but a plan can help you start and stick with it.</p>
            <p>Your new exercise plan has a better chance of success if you:</p>
            <ul>
                <li>choose an activity you like, or have enjoyed in the past, that suits your fitness levels and abilities</li>
                <li>start small – build up your activity gradually. Ideally, vary your activities so you don’t get bored</li>
                <li>write your plan in your diary or on your calendar, so it’s part of your schedule</li>
                <li>regularly revisit your exercise plans, and try something different if it’s not working out for you.</li>
            </ul>
            `,
        tags: ["Health", "Exercise", "Fitness", "Wellness"],
        relatedArticles: ["health-1", "sports-1"]
    },
    "sports-1": {
        id: "sports-1",
        title: "Modern Training Techniques in Professional Sports",
        author: "Jane Smith",
        date: "January 16, 2024",
        category: "Sports",
        readTime: "8 min read",
        image: "images/sports.jpg",
        content: `
            <p>Modern sports training has evolved significantly with the advancement of technology and our understanding of human physiology. This article explores the latest training methodologies used by professional athletes.</p>

            <h2>Technology in Training</h2>
            <p>Modern athletes use various technological tools to enhance their training:</p>
            <ul>
                <li>Motion capture systems</li>
                <li>Biometric sensors</li>
                <li>Virtual reality training</li>
                <li>Advanced fitness tracking</li>
            </ul>`,
        tags: ["Sports", "Training", "Technology", "Fitness"],
        relatedArticles: ["sports-2", "sports-3"]
    },
    "sports-2": {
        id: "sports-2",
        title: "Nutrition for Athletes",
        author: "Tom Brown",
        date: "January 19, 2024",
        category: "Sports",
        readTime: "6 min read",
        image: "images/sports2.jpg",
        content: `
            <p>Proper nutrition is crucial for athletic performance. Learn about the best dietary practices for athletes.</p>

            <h2>Key Nutritional Needs</h2>
            <ul>
                <li>Protein requirements</li>
                <li>Carbohydrate timing</li>
                <li>Hydration strategies</li>
                <li>Supplement considerations</li>
            </ul>
            <h2>Path to improved health</h2>
            <p>Every person’s needs are different. The amount of food you need depends on your age, height, weight, and sport or activity level. In general, you need to replace the number of calories you burn each day with athletic activity. Calories measure the energy you get from food. Most people need between 1,500 and 2,000 calories a day. For athletes, this number can increase by 500 to 1,000 more calories.</p>
            <ul>
                <li><b>Carbohydrates (carbs)</b> are your body’s biggest source of calories. Simple carbs (fruits, milk, and vegetables) are easier for your body to break down. They provide quick bursts of energy. Complex carbs take longer for your body to break down. They are a better source of energy over time. Complex carbs in whole grain products are the most nutritious. Examples include whole-grain bread, potatoes, brown rice, oatmeal, and kidney beans. Doctors recommend that 55% to 60% of your daily calories come from carbohydrates.</li>
                <li><b>Fat</b> is another important source of calories. In small amounts, fat is a key fuel source. It serves other functions, such as supporting good skin and hair. Do not replace carbs in your diet with fats. This can slow you down, because your body has to work harder to burn fat for energy. Fats should make up no more than 30% of your daily calories. When you can, choose unsaturated fats, like olive oil and nuts. These are better for your health than saturated and trans fats. Too much fat or the wrong kinds can cause health problems. It can raise your bad (LDL) cholesterol level and increase your risk of heart disease and type 2 diabetes.</li>
                <li><b>Protein</b> should make up the remaining 10% to 15% of your daily calories. Protein is found in foods like meat, eggs, milk, beans, and nuts. Some athletes think they should consume large amounts of protein. While protein does help build muscle, high doses won’t help you bulk up. Over time, too much protein can be harmful to your health. The digestion process can put strain on your liver and kidneys</li>
            </ul>
            `,
        tags: ["Sports", "Nutrition", "Athletics", "Health"],
        relatedArticles: ["sports-1", "health-1"]
    },
    "sports-3": {
        id: "sports-3",
        title: "Recovery Techniques in Sports",
        author: "Lisa Johnson",
        date: "January 21, 2024",
        category: "Sports",
        readTime: "5 min read",
        image: "images/sports3.jpeg",
        content: `
            <p>Recovery is crucial for athletic performance. Discover the latest recovery methods used by professional athletes.</p>

            <h2>Modern Recovery Methods</h2>
            <ul>
                <li>Rest</li>
                <li>Stretching</li>
                <li>Active recovery</li>
                <li>Sleep optimization</li>
            </ul>
            <h2>The best recovery methods for athletes<h2>
            <p>Sports recovery is a relatively new field of formal research. In the past, scientists focused more on how training methods impact performance. But as the benchmarks for athletic performance have risen, athletes and coaches have expanded their search beyond training, looking for other ways to optimize their routines, get the most out of “down” time, and discover any behaviors that might provide a competitive edge.</p>
            <h2>Rest</h2>
            <p>Rest is a key component of all sports recovery protocols. Effective training challenges your body and even damages your muscles at a microscopic level, which prompts your body to rebuild and get stronger. Without rest, your body doesn’t have a chance to rebuild effectively.</p>
            <h2>Active rest</h2>
            <p>Active rest is an athletic recovery method consisting of light activity during your rest time. For example, you may take an easy swim on your off day or at the end of a day when you trained hard in the morning. Active rest is thought to promote recovery by increasing blood flow to the muscles and helping clear lactate that builds up during a workout.
            Some studies show improved performance after active, versus passive, rest, but the research isn't conclusive. Still, there are no documented downsides to active rest and a great deal of anecdotal evidence that it helps.</p>
            <h2>Stretching</h2>
            <p>Stretching is a popular—almost universal—post-workout athletic recovery technique that has a negligible effect on athletic performance but may help improve mood and psychological well-being. It can also be an important part of correcting and maintaining movement patterns, which can help mitigate overextension and future injury.</p>`,
        tags: ["Sports", "Recovery", "Athletics", "Health"],
        relatedArticles: ["sports-1", "sports-2"]
    },
    "culture-1": {
        id: "culture-1",
        title: "The Impact of Social Media on Modern Culture",
        author: "Mike Johnson",
        date: "January 17, 2024",
        category: "Culture",
        readTime: "6 min read",
        image: "images/culture.png",
        content: `
            <p>Social media has fundamentally changed how we interact, communicate, and consume information. This article examines its profound impact on modern culture.</p>

            <h2>Communication Changes</h2>
            <p>Social media has transformed communication in several ways:</p>
            <ul>
                <li>Instant global connectivity</li>
                <li>New forms of expression</li>
                <li>Changed social norms</li>
                <li>Digital communities</li>
            </ul>`,
        tags: ["Culture", "Social Media", "Technology", "Society"],
        relatedArticles: ["culture-2", "culture-3"]
    },
    "culture-2": {
        id: "culture-2",
        title: "Art in the Digital Age",
        author: "Emma White",
        date: "January 22, 2024",
        category: "Culture",
        readTime: "7 min read",
        image: "images/culture2.jpg",
        content: `
            <p>Digital technology has revolutionized how we create, share, and experience art. Explore the intersection of art and technology.</p>

            <h2>Digital Art Forms</h2>
            <ul>
                <li>Digital painting</li>
                <li>3D modeling</li>
                <li>Human Learning</li>
                <li>NFTs</li>
            </ul>
            
            <h2>Art & NFT</h2>
            <p>While there has been technology in art since the late 1960s and artworks on the Internet since the mid-1990s, it was not until 2021 that the art market took notice following a few record NFT sales. Or how digital artists approach this new territory.</p>
            <h2>Human Learning</h2>
            <p>We have taught everything to machines and continue to supply them so that they pursue the 'desire' for autonomy we would like to grant them. Isn’t it time that we started thinking that we, too, learn from them by observing their specificities or qualities? Answer at the Canadian Cultural Centre in Paris.</p>
            `,
        tags: ["Culture", "Art", "Technology", "Digital"],
        relatedArticles: ["culture-1", "culture-3"]
    },
    "culture-3": {
        id: "culture-3",
        title: "Global Food Culture",
        author: "David Chen",
        date: "January 23, 2024",
        category: "Culture",
        readTime: "6 min read",
        image: "images/culture3.jpg",
        content: `
            <p>Food is a universal language that connects cultures. Discover how different cuisines influence global culture.</p>

            <h2>Cultural Food Trends</h2>
            <ul>
                <li>Fusion cuisine</li>
                <li>Street food culture</li>
                <li>Traditional preservation</li>
                <li>Food festivals</li>
            </ul>
            <p>Food culture is an integral part of human civilization, representing the way societies prepare, share, and cherish their meals. It encapsulates the essence of a community’s identity, reflecting historical, geographical, and social influences. The importance of these traditions extends far beyond mere sustenance, as they intricately reflect the unique identities of diverse societies.</p>
            <p>Whether it’s the ceremonial tea traditions in Japan or the communal feasts in Ethiopia, food culture is a dynamic expression of shared values.</p>
            <p>The primary objective of this article is to delve into the myriad cultural aspects that contribute to the rich tapestry of global culinary traditions. By exploring the historical, geographical, and sociocultural influences on world cuisine, we aim to gain a comprehensive understanding of how different cultures have left an indelible mark on today’s foods we savour.</p>
            
            <h2>The Influence of Geography on Cuisine</h2>
            <p>Geography, with its varied landscapes and climates, serves as a fundamental influencer on the culinary practices of regions around the world. The availability of ingredients dictated by climate and terrain profoundly shapes local cuisines, creating a tapestry of flavours unique to each area.</p>
            <h2>Historical Roots of Culinary Traditions</h2>
            <p>Over time, different events, movements, and trade have influenced the way we cook and eat, creating a diverse and colourful world of food cultures. Exploring the historical roots of culinary traditions unveils the intricate ways in which societies have evolved, influencing, and being influenced by the foods they prepare and savour.</p>
            <h2>Fusion of Culinary Traditions</h2>
            <p>Historical interactions often resulted in the fusion of culinary traditions, giving rise to hybrid dishes that encapsulate diverse cultural influences. One notable example is the Peranakan cuisine in Southeast Asia, a blend of Chinese and Malay culinary traditions. Dishes like Nasi Lemak and Laksa showcase a harmonious integration of flavours, techniques, and ingredients from both cultures.</p>`,
        tags: ["Culture", "Food", "Tradition", "Global"],
        relatedArticles: ["culture-1", "culture-2"]
    }
};
