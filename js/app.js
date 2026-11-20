const modules = [
{id:1,title:"Introduction to Data Analysis",stage:"foundation",summary:"Understand data, analytical questions and the end-to-end data analysis lifecycle.",topics:["What is data and data analysis?","Data types and sources","Analyst vs scientist vs engineer","Analysis lifecycle","Exercise: inspect a sales dataset"],project:"Inspect a small sales dataset and identify useful questions it can answer."},
{id:2,title:"Python Fundamentals",stage:"foundation",summary:"Learn the Python syntax and core concepts needed for data work.",topics:["Environment and notebooks","Variables and data types","Operators","Input/output","Basic debugging"],project:"Write a small Python program that calculates sales totals, percentages and simple KPIs."},
{id:3,title:"Python Data Structures",stage:"foundation",summary:"Represent and manipulate collections using lists, tuples, dictionaries and sets.",topics:["Lists","Tuples","Dictionaries","Sets","Indexing and slicing"],project:"Represent customers, products and transactions using core Python data structures."},
{id:4,title:"Programming Logic",stage:"foundation",summary:"Develop problem-solving skills with conditions, loops and functions.",topics:["if / elif / else","for and while loops","range, break and continue","Functions and scope","List comprehensions","Introductory lambda functions"],project:"Create reusable functions for cleaning values and calculating business metrics."},
{id:5,title:"Python for Data Work",stage:"data",summary:"Use strings, dates, files and exceptions to handle messy real-world values.",topics:["String cleaning","datetime","Parsing and formatting dates","Exceptions","Text files"],project:"Clean a messy customer contact file using Python."},
{id:6,title:"NumPy",stage:"data",summary:"Learn arrays and vectorized numerical computation.",topics:["Arrays and dimensions","Indexing and slicing","Vectorization","Broadcasting","Aggregations","Boolean filtering"],project:"Analyze a set of monthly numerical measurements with NumPy."},
{id:7,title:"Pandas Fundamentals",stage:"data",summary:"Build confidence with Series, DataFrames, inspection, selection and filtering.",topics:["Series and DataFrames","CSV and Excel","head, info, describe","loc and iloc","Filtering"],project:"Inspect a real CSV dataset and answer a set of analytical questions."},
{id:8,title:"Data Cleaning",stage:"data",summary:"Turn unreliable raw data into an analysis-ready dataset.",topics:["Missing values","Duplicates","Data types","Text normalization","Invalid values","Outlier detection","Data-quality checklist"],project:"Produce a cleaned, documented dataset from a deliberately messy source."},
{id:9,title:"Data Transformation",stage:"data",summary:"Create analytical variables, group data and reshape datasets.",topics:["Sorting","Calculated columns","Renaming","apply and map","groupby and aggregations","Pivot tables"],project:"Produce regional sales KPIs from transaction data."},
{id:10,title:"Combining Datasets",stage:"data",summary:"Combine related datasets safely using concatenation and joins.",topics:["concat","merge","Inner joins","Left/right/outer joins","Duplicate keys","Row-count validation","SQL JOIN comparison"],project:"Combine customers, orders and products into an analysis-ready dataset."},
{id:11,title:"Exploratory Data Analysis",stage:"data",summary:"Turn business questions into structured exploratory analysis.",topics:["Analytical questions","Descriptive statistics","Distributions","Skewness","Outliers","Correlation","EDA workflow"],project:"Complete an EDA notebook that moves from questions to evidence and insights."},
{id:12,title:"Data Visualization",stage:"data",summary:"Create clear static and interactive charts that answer analytical questions.",topics:["Matplotlib","Line/bar/histogram/scatter/box plots","Seaborn","Plotly Express","Chart selection","Visual storytelling"],project:"Create a one-page visual story from an exploratory analysis."},
{id:13,title:"Statistics for Data Analysts",stage:"professional",summary:"Learn practical statistics for interpreting data rather than abstract mathematics.",topics:["Population vs sample","Central tendency","Variability","Quartiles and IQR","Sampling","Correlation/covariance","Intro hypothesis testing"],project:"Use descriptive statistics to compare two groups and explain the findings."},
{id:14,title:"SQL for Python Analysts",stage:"professional",summary:"Query databases and connect SQL results to Python workflows.",topics:["SELECT/WHERE/ORDER BY","GROUP BY/HAVING","Aggregations","JOINs","CASE","CTEs and subqueries","Window functions"],project:"Answer the same business questions using SQL and Pandas, then compare the approaches."},
{id:15,title:"APIs & JSON",stage:"professional",summary:"Acquire current data from web APIs and convert JSON into analysis-ready tables.",topics:["API concepts","HTTP and GET/POST","Status codes","JSON","requests","Authentication concepts"],project:"Retrieve data from a public API and analyze it with Pandas."},
{id:16,title:"Excel + Python",stage:"professional",summary:"Automate common Excel-based analysis workflows with Python.",topics:["read_excel","to_excel","Worksheets","Cleaning Excel exports","Excel vs Python","Automation"],project:"Automate a recurring Excel-based analysis workflow."},
{id:17,title:"Data Quality",stage:"professional",summary:"Make data-quality assessment a formal part of analytical practice.",topics:["Accuracy","Completeness","Consistency","Validity","Uniqueness","Timeliness","Validation rules and documentation"],project:"Build a reusable data-quality checklist and validation workflow."},
{id:18,title:"Real-World Projects",stage:"professional",summary:"Apply the complete workflow to progressively larger practical projects.",topics:["Expense analysis","Supermarket sales","Employee analytics","Public health analysis","Question → cleaning → EDA → findings → recommendations"],project:"Complete at least two end-to-end mini-projects using unfamiliar datasets."},
{id:19,title:"Dashboard Development",stage:"professional",summary:"Turn analysis into interactive dashboards with Plotly and Dash.",topics:["Plotly progression","Dash app structure","Layouts","dcc.Graph","Dropdowns","Callbacks","KPIs and filters"],project:"Build a small operational dashboard from a cleaned analytical dataset."},
{id:20,title:"Professional Reporting",stage:"professional",summary:"Communicate analysis clearly to decision-makers.",topics:["Executive summary","Data sources and quality","Methodology","Key findings","Recommendations","Limitations"],project:"Convert an exploratory notebook into a decision-ready analytical report."},
{id:21,title:"Portfolio Development & Capstone",stage:"professional",summary:"Build evidence of competence through GitHub projects and one end-to-end capstone.",topics:["5–6 portfolio projects","README documentation","Reproducible workflows","Screenshots and dashboards","Multi-source capstone","Publish and present"],project:"Complete a multi-source analysis from data acquisition through recommendations and publish it as a portfolio project."}
];

const stageNames={foundation:"Foundation",data:"Data Analysis",professional:"Professional"};
const nav=document.getElementById("moduleNav"), list=document.getElementById("moduleList");

function renderNav(){nav.innerHTML=modules.map(m=>`<button class="module-link" data-id="${m.id}"><span class="num">${String(m.id).padStart(2,"0")}</span>${m.title}</button>`).join("");}
function renderList(filter="all"){
 const ms=filter==="all"?modules:modules.filter(m=>m.stage===filter);
 list.innerHTML=ms.map(m=>`<article class="module-card" id="module-${m.id}"><div class="module-main"><div class="module-number">${String(m.id).padStart(2,"0")}</div><div><h3>${m.title}</h3><p>${m.summary}</p><div class="module-meta"><span class="tag">${stageNames[m.stage]}</span><span class="tag">${m.topics.length} topics</span></div></div><div class="module-actions"><button class="details" data-details="${m.id}">View module</button></div></div></article>`).join("");
}
function openModule(id){
 const m=modules.find(x=>x.id===id);
 document.getElementById("modalContent").innerHTML=`<div class="eyebrow">${stageNames[m.stage].toUpperCase()}</div><h2>Module ${m.id} — ${m.title}</h2><p class="muted">${m.summary}</p><h3>Topics</h3><ul>${m.topics.map(t=>`<li>${t}</li>`).join("")}</ul><div class="project-box"><strong>Practical work</strong><span>${m.project}</span></div>`;
 document.getElementById("moduleModal").classList.remove("hidden");
}
document.addEventListener("click",e=>{
 const d=e.target.closest("[data-details]");
 if(d){openModule(+d.dataset.details);return;}
 const n=e.target.closest(".module-link");
 if(n){document.getElementById(`module-${n.dataset.id}`)?.scrollIntoView({behavior:"smooth",block:"center"});document.querySelectorAll(".module-link").forEach(x=>x.classList.remove("active"));n.classList.add("active");document.getElementById("sidebar").classList.remove("open");return;}
 if(e.target.matches("[data-close]")||e.target.closest("[data-close]"))document.getElementById("moduleModal").classList.add("hidden");
});
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderList(btn.dataset.filter);}));
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("pyda-dark",document.body.classList.contains("dark"));};
if(localStorage.getItem("pyda-dark")==="true")document.body.classList.add("dark");
document.getElementById("menuBtn").onclick=()=>document.getElementById("sidebar").classList.toggle("open");
document.getElementById("startBtn").onclick=()=>document.getElementById("module-1").scrollIntoView({behavior:"smooth"});
document.getElementById("overviewBtn").onclick=()=>document.getElementById("sectionTitle").scrollIntoView({behavior:"smooth"});
renderNav();renderList();
