const reports=[
 ['product','Product monitoring','Product and channel performance in a shared business overview.'],
 ['financial','Financial steering','Commercial costs, cost ratios and investment allocation in one view.'],
 ['o2o','Meituan O2O operations','Sales, advertising spend, keywords and promotion performance.'],
 ['traceability','Drug traceability','Product delivery and offtake across brands, customers and regions.'],
 ['market','Omnichannel market insights','Market size, growth, channel structure and manufacturer performance.'],
 ['replenishment','Daily store replenishment','Listing gaps, stockouts, targets and field-team coverage.'],
 ['mcp','MCP access governance','Personal-token management in the original interface. The displayed token is a nonfunctional demo placeholder.'],
 ['execution','Execution logs','Plans with owners, targets and review dates, captured in the original execution log.'],
 ['o2o-ai','O2O AI analysis','The original analysis workflow, demonstrated with synthetic data and a scripted AI response.'],
 ['ai-review','Execution-plan AI review','The original AI review workflow, demonstrated with synthetic plans and a scripted response.']
];
const gallery=document.getElementById('gallery'),film=document.getElementById('film'),video=film.querySelector('video');
function showReport(index){const [file,title,description]=reports[index];document.getElementById('report-select').value=String(index);document.getElementById('gallery-title').textContent=title;document.getElementById('report-description').textContent=description;const img=document.getElementById('report-image');img.src=`assets/real-${file}.png`;img.alt=`Original ${title} interface with synthetic demo data`;document.getElementById('report-full').href=img.src;document.getElementById('report-full').setAttribute('aria-label',`Open full-size ${title} screenshot`)}
document.querySelectorAll('[data-report]').forEach(button=>button.addEventListener('click',()=>{showReport(Number(button.dataset.report));gallery.showModal()}));
document.getElementById('report-select').addEventListener('change',e=>showReport(Number(e.target.value)));
document.querySelectorAll('[data-film]').forEach(button=>button.addEventListener('click',()=>{film.showModal();video.play().catch(()=>{})}));
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
film.addEventListener('close',()=>video.pause());
for(const dialog of [gallery,film])dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
showReport(0);
