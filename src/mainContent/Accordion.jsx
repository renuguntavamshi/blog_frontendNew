function Accordion() {
    let blogs = [
        {
            blogTitle: "The Future of AI: What to Expect in the Next 5 Years",
            blogDescription: "Artificial Intelligence is no longer science fiction—it's reshaping the world we live in. From self-driving cars to personalized healthcare and intelligent virtual assistants, AI is revolutionizing every sector. In this article, we dive deep into upcoming advancements, ethical concerns, job market shifts, and the role AI will play in decision-making, creativity, and human interaction over the next five years."
        },
        {
            blogTitle: "Why Minimalism Is the New Luxury in Web Design",
            blogDescription: "Modern web design is embracing the elegance of simplicity. Gone are the days of cluttered layouts and flashing animations. Today's users demand clean, fast, and intuitive interfaces. This blog explores how minimalist design not only improves user experience but also builds trust, increases performance, and reflects a brand's confidence. Discover tips on typography, color schemes, white space, and visual hierarchy that can transform your site into a masterpiece of modern minimalism."
        },
        {
            blogTitle: "Top 10 JavaScript Frameworks You Should Learn in 2025",
            blogDescription: "Staying up-to-date with the latest tools is crucial for any developer. In this post, we break down the top 10 JavaScript frameworks and libraries to learn in 2025, including React, Vue, Svelte, and more. Whether you're a beginner or looking to expand your tech stack, this guide will help you choose the right tools to boost your career and build high-performing web applications."
        }
    ];

    return (
        <section className="m-4">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {blogs[0].blogTitle}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            {blogs[0].blogDescription}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            {blogs[1].blogTitle}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            {blogs[1].blogDescription}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            {blogs[2].blogTitle}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            {blogs[2].blogDescription}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accordion;
