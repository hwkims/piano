var MusikipediaRU_rytmer=function(){"use strict";let e,t,i,a,n,o,s,r,u=null,l=!1;var h=function(r){e=new MusikipediaRhythmImage({elementToWhichTheRhythmImageAreCreated:document.getElementById("spoergsmaal"),zoom:m(),editMode:!1,swingText:r.swingText,resizeFunction:p}),MusikipediaRhythmPlayer.initialisation({unitsPerStep:r.greatestCommonLevelLength,elementWithButton:document.getElementById("afspil-lyd"),includeCountIn:!0,includePlaying:!0,includeTapping:!0,includeCountOut:!0,beforePlayingCallback:c,afterStoppingCallback:d,changeStatusCallback:y,beforeChangeStatusCallback:I,finishedTappingCallback:B,countInCallback:x,rhythmImage:e}),t=r.listenText,i=r.tapText,a=r.wrongText,n=r.wrongListenText,o=r.correctText,s=r.clickPlayButtonToStartText,e.createInfoBox(f,r.naesteSpoergsmaal,k),e.setInfoBoxText(s),e.setInfoBoxImage(),e.setInfoBoxState(),MusikipediaOpgave.skrivRespons()},m=function(){return window.innerWidth>800?.6:.4*window.innerWidth/800+.2},f=function(e){e.preventDefault(),MusikipediaRhythmPlayer.tap()},p=function(t){e.setZoom(m())},c=function(){e.removeAllLabels()},d=function(){e.setInfoBoxText(s),e.setInfoBoxState(),e.setInfoBoxImage(),l=!1},g=function(){MusikipediaRhythmPlayer.shutDown()},y=function(a){switch(a){case"countin":e.removeAllLabels(),l&&(MusikipediaOpgave.gaaVidereMedNaesteSpoergsmaal(M),e.setRhythm(r),MusikipediaRhythmPlayer.setRhythm(e.getRhythm())),l=!1,e.setInfoBoxState(),e.setInfoBoxText(t),e.setInfoBoxImage("1");break;case"play":e.removeAllLabels(),e.setInfoBoxState(),e.setInfoBoxText(t),e.setInfoBoxImage("listen");break;case"tap":e.setInfoBoxState(),e.setInfoBoxText(i),e.setInfoBoxImage("tap");break;case"countout":break;case"stop":e.setInfoBoxState(),e.setInfoBoxText(s),e.setInfoBoxImage()}},x=function(t){e.setInfoBoxImage(t)},I=function(e,t){"countin"===e&&MusikipediaOpgave.userHasAnsweredTheRequiredNumberOfQuestionsCorrectly()&&MusikipediaRhythmPlayer.removeMetronome()},B=function(){if(MusikipediaRhythmPlayer.atLeastOneNoteWasWrongDuringTapping()){MusikipediaOpgave.forkertSvar(),MusikipediaRhythmPlayer.skipCountOut();MusikipediaOpgave.antalForkerteForsoegPaaDetteSporgsmaal()<3?(e.setInfoBoxText(n),e.setInfoBoxImage("1"),e.setInfoBoxState("÷")):(MusikipediaRhythmPlayer.stop(),MusikipediaRhythmPlayer.hideButton(),e.showNextQuestionButton(!0),e.setInfoBoxText(t),e.setInfoBoxImage("1"),e.setInfoBoxState())}else MusikipediaOpgave.rigtigtSvar(),e.setInfoBoxText(o),e.setInfoBoxImage(""),e.setInfoBoxState("√"),l=!0},k=function(){e.setInfoBoxText(t),e.setInfoBoxImage("1"),e.setInfoBoxState(),MusikipediaOpgave.gaaVidereMedNaesteSpoergsmaal(M)},M=function(){MusikipediaRhythmPlayer.stop()},T=function(e,t){if(null===e||null===t)return!1;{const i=new MusikipediaRhythm(e),a=new MusikipediaRhythm(t);return i.isEqualTo(a)}},R=function(t){r=null===u?new MusikipediaRhythm(t):u,e.setRhythm(r);const i=e.getRhythm();MusikipediaRhythmPlayer.setRhythm(i),r.metricalStructure.tempo>65?MusikipediaRhythmPlayer.setToleranceLimits({beforeTactusBeat:100,beforeOtherBeat:70,afterTactusBeat:100,afterOtherBeat:70}):MusikipediaRhythmPlayer.setToleranceLimits({beforeTactusBeat:140,beforeOtherBeat:90,afterTactusBeat:140,afterOtherBeat:90}),e.showInfoBox(!0),MusikipediaRhythmPlayer.showButton(),MusikipediaRhythmPlayer.setMarkNotesDuringTapping(!1)},S=function(e){u=new MusikipediaRhythm(e)};return{initialisering:function(){MusikipediaOpgave.initialisering("RU_rytmer",h,T,R,S,g)}}}();window.addEventListener("load",MusikipediaRU_rytmer.initialisering());