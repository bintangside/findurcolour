let score=0,music=false,ctx;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function beep(freq=600){if(!music)return;ctx??=new(window.AudioContext||window.webkitAudioContext)();let o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=freq;o.type="sine";g.gain.value=.045;o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.13)}
$$(".tab").forEach(t=>t.onclick=()=>{$$(".tab").forEach(x=>x.classList.remove("active"));$$(".panel").forEach(x=>x.classList.remove("active"));t.classList.add("active");$("#"+t.dataset.tab).classList.add("active");beep(700)});
$$(".makeup").forEach(b=>b.onclick=()=>{let t=b.dataset.type,c=b.dataset.color;if(t=="blush")$$(".blush").forEach(x=>x.style.background=c+"88");if(t=="highlight")$(".highlight").style.background=c;if(t=="liner")$$(".liner").forEach(x=>x.style.borderTopColor=c);if(t=="shadow")$$(".eye").forEach(x=>x.style.boxShadow=`0 -12px 0 ${c}99`);if(t=="lips")$(".lips").style.background=c;if(t=="accessory")$(".outfit").textContent=b.dataset.value;score+=+b.dataset.points;$("#score").textContent=score;$("#look").textContent=b.textContent.replace(/\s+/g," ").trim();beep(520)});
$("#musicBtn").onclick=()=>{music=!music;$("#musicBtn").textContent=music?"🎵":"🔇";if(music)beep(660)};
$("#finish").onclick=()=>{$("#final").textContent=score;$("#resultText").textContent=score>=100?"OMG! Total glam queen! 👑":score>=50?"So cute! Your look is glowing! 💕":"Sweet start! Add more sparkle! ✨";$("#modal").classList.add("show");beep(800)};
$("#close").onclick=()=>$("#modal").classList.remove("show");
$("#resetBtn").onclick=()=>location.reload();
