(e=>{class t{constructor(e){this.tableEl=document.querySelector(e),this.tableEl&&(this.boxes=[].slice.call(this.tableEl.querySelectorAll("td input[type=checkbox]")),this.rows=[].slice.call(document.querySelectorAll('tr[class^="row"]')),this.checkallToggle=document.querySelector('[name="checkall-toggle"]'),this.onCheckallToggleClick=this.onCheckallToggleClick.bind(this),this.onRowClick=this.onRowClick.bind(this),this.checkallToggle&&this.checkallToggle.addEventListener("click",this.onCheckallToggleClick),this.rows.length&&this.rows.forEach((e=>{e.addEventListener("click",this.onRowClick)})))}changeBg(e,t){t?[].slice.call(e.querySelectorAll("td, th")).forEach((e=>{e.classList.add("row-selected")})):[].slice.call(e.querySelectorAll("td, th")).forEach((e=>{e.classList.remove("row-selected")}))}onCheckallToggleClick({target:e}){const t=e.checked;this.rows.forEach((e=>{this.changeBg(e,t)}))}onRowClick({target:t,shiftKey:l}){if(t.tagName&&("a"===t.tagName.toLowerCase()||"button"===t.tagName.toLowerCase()))return;if(!this.boxes.length)return;const c=t.closest("tr"),o=this.rows.indexOf(c),s=c.querySelector("td input[type=checkbox]");if(s){let c=s.checked;t.id!==s.id&&(l&&(document.body.style["-webkit-user-select"]="none",document.body.style["-moz-user-select"]="none",document.body.style["-ms-user-select"]="none",document.body.style["user-select"]="none"),s.checked=!s.checked,c=s.checked,e.isChecked(c,this.tableEl.id)),this.changeBg(this.rows[o],c),l&&(document.body.style["-webkit-user-select"]="none",document.body.style["-moz-user-select"]="none",document.body.style["-ms-user-select"]="none",document.body.style["user-select"]="none")}}}document.addEventListener("DOMContentLoaded",(()=>{let l="#adminForm";e&&e.getOptions("js-multiselect",{}).formName&&(l=`#${e.getOptions("js-multiselect",{}).formName}`),new t(l)}))})(Joomla);