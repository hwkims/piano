var MusikipediaBG_instrumenter=function(){"use strict";var e,i=function(i){(e=document.createElement("img")).className="instrument_image",e.style.display="none",document.getElementById("spoergsmaal").appendChild(e),document.getElementById("spoergsmaal").classList.add("question_instrument_image"),document.getElementById("afspil-lyd-felt")&&(document.getElementById("afspil-lyd-felt").style.display="none"),MusikipediaSvarknapper.initialisering(i.svarknapper,t,document.getElementById("svarknapper")),MusikipediaOpgave.createLicenseTip()},n=function(e,i){return null!==e&&null!==i&&e.absolutePath===i.absolutePath},t=function(e,i){return e===i.internalName},a=function(i){e.src="/ovelser/grafik/spinner-big.gif",e.style.height="280px",e.src=i.absolutePath,e.style.display="inline",e.style.width=Math.min(750,280*parseInt(i.width)/parseInt(i.height))+"px",e.style.height="auto",MusikipediaOpgave.setLicenseInfo({imageLicense:i.license})},s=function(e){(new Image).src=e.absolutePath};return{initialisering:function(){MusikipediaOpgave.initialisering("BG_instrumenter",i,n,a,s)}}}();window.addEventListener("load",MusikipediaBG_instrumenter.initialisering());