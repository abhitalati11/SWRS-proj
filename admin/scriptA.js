const sample = [
  {id:1,user:'User_105',name:'Asha Patel',desc:'Pothole near 5th street, causing traffic.',loc:'5th St, Block A',status:'pending',priority:'normal'},
  {id:2,user:'User_210',name:'Ravi Kumar',desc:'Streetlight not working for 2 days.',loc:'Park Ave',status:'completed',priority:'normal'},
  {id:3,user:'User_333',name:'Sara Lee',desc:'Overflowing garbage bin; smell and pests.',loc:'Market Rd',status:'pending',priority:'high'},
  {id:4,user:'User_421',name:'John Doe',desc:'Illegal dumping behind warehouse.',loc:'Industrial Rd',status:'pending',priority:'high'},
  {id:5,user:'User_552',name:'Maya Singh',desc:'Broken bench and damaged path in park.',loc:'City Park',status:'completed',priority:'normal'}
];

const listEl = document.getElementById('complaints-list');
const chips = Array.from(document.querySelectorAll('.chip'));

function renderList(items){
  listEl.innerHTML = '';
  if(!items.length){ listEl.innerHTML = '<div class="card">No complaints found.</div>'; return }
  items.forEach(c=>{
    const el = document.createElement('div'); el.className = 'card complaint';
    el.innerHTML = `
      <div class="meta">
        <div class="user">${c.name} <span style="color:#94a3b8;font-size:12px">(${c.user})</span></div>
        <div class="desc">${c.desc}</div>
        <div class="location">${c.loc}</div>
        <div style="margin-top:8px">
          <span class="pill status ${c.status}">${c.status}</span>
          <span class="pill priority ${c.priority==='high'?'high':''}">${c.priority}</span>
        </div>
      </div>
      <div class="thumbnail">Image</div>
    `;
    listEl.appendChild(el);
  })
}

function applyFilter(key){
  let out = sample.slice();
  if(key==='pending') out = out.filter(x=>x.status==='pending');
  if(key==='completed') out = out.filter(x=>x.status==='completed');
  if(key==='high') out = out.filter(x=>x.priority==='high');
  renderList(out);
  drawSummary(out);
}

chips.forEach(ch=>ch.addEventListener('click',e=>{
  chips.forEach(c=>c.classList.remove('active'));
  ch.classList.add('active');
  applyFilter(ch.dataset.filter);
}));

// Simple summary chart showing counts by status
function drawSummary(filtered){
  const canvas = document.getElementById('summaryChart');
  const ctx = canvas.getContext('2d');
  const statuses = ['pending','completed'];
  const counts = statuses.map(s=>filtered.filter(f=>f.status===s).length);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const max = Math.max(1, ...counts);
  const barW = 60; const gap = 30; const baseY = canvas.height - 30;
  statuses.forEach((s,i)=>{
    const h = (counts[i]/max) * 120;
    const x = 20 + i*(barW+gap);
    ctx.fillStyle = s==='pending' ? '#f59e0b' : '#10b981';
    ctx.fillRect(x, baseY - h, barW, h);
    ctx.fillStyle = '#0f172a'; ctx.font='12px sans-serif'; ctx.fillText(s, x, baseY + 16);
    ctx.fillText(counts[i], x+barW/2-6, baseY - h - 6);
  })
}

// initial
renderList(sample);
drawSummary(sample);
