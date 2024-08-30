var double_sharp=function(color){return('<svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 1px" height="8" width="8" viewBox="0 0 15 15">'+
'<path fill="'+
color+
'" d="M 15.1800003051758, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 10.6800003051758, 15.1800003051758, 10.6800003051758 C 15.1800003051758, 10.6800003051758, 14.6999998092651, 10.6800003051758, 14.6999998092651, 10.6800003051758 C 12.6599998474121, 10.6800003051758, 10.5600004196167, 9.60000610351562, 8.52000045776367, 7.56000518798828 C 10.5, 5.58000183105469, 12.7200002670288, 4.5, 15.1800003051758, 4.3800048828125 C 15.1800003051758, 4.3800048828125, 15.1800003051758, 0, 15.1800003051758, 0 C 15.1800003051758, 0, 10.8000001907349, 0, 10.8000001907349, 0 C 10.8000001907349, 2.28000640869141, 9.72000026702881, 4.5, 7.55999994277954, 6.66000366210937 C 5.46000003814697, 4.56000518798828, 4.38000011444092, 2.34000396728516, 4.38000011444092, 0 C 4.38000011444092, 0, 0, 0, 0, 0 C 0, 0, 0, 4.3800048828125, 0, 4.3800048828125 C 2.33999991416931, 4.3800048828125, 4.55999994277954, 5.46000671386719, 6.65999984741211, 7.56000518798828 C 4.55999994277954, 9.66000366210937, 2.33999991416931, 10.6800003051758, 0, 10.6800003051758 C 0, 10.6800003051758, 0, 15.0600051879883, 0, 15.0600051879883 C 0, 15.0600051879883, 4.38000011444092, 15.0600051879883, 4.38000011444092, 15.0600051879883 C 4.38000011444092, 12.7200012207031, 5.46000003814697, 10.5, 7.55999994277954, 8.40000152587891 C 9.72000026702881, 10.5600051879883, 10.8000001907349, 12.7800064086914, 10.8000001907349, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883"/>'+
"</svg>");};window.translation={finder_name:"interval finder",button_names:{instrument:{default_name:"악기",names:["피아노","기타","표기법"],},play:"음계 연주하기",clef:{default_name:"음자리표",names:["높은음자리표","낮은음자리표","알토음자리표","테너음자리표"],},},notes_text:"음계 안의 음:",notes_text_chromatic:"모든 음",root_note_accidentals:{Cb:"C<span class='--accidentals'>¨</span>",C:"C","C#":"C<span class='--accidentals'>©</span>",Db:"D<span class='--accidentals'>¨</span>",D:"D","D#":"D<span class='--accidentals'>©</span>",Eb:"E<span class='--accidentals'>¨</span>",E:"E","E#":"E<span class='--accidentals'>©</span>",Fb:"F<span class='--accidentals'>¨</span>",F:"F","F#":"F<span class='--accidentals'>©</span>",Gb:"G<span class='--accidentals'>¨</span>",G:"G","G#":"G<span class='--accidentals'>©</span>",Ab:"A<span class='--accidentals'>¨</span>",A:"A","A#":"A<span class='--accidentals'>©</span>",Bb:"B<span class='--accidentals'>¨</span>",B:"B","B#":"B<span class='--accidentals'>©</span>",},root_note_green_circle:{Cbb:"다<i class='--accidentals-circle'>¨¨</i>",Cb:"다<i class='--accidentals-circle'>¨</i>",C:"다","C#":"다<i class='--accidentals-circle'>©</i>","C##":"다"+double_sharp("#fff"),Dbb:"라<i class='--accidentals-circle'>¨¨</i>",Db:"라<i class='--accidentals-circle'>¨</i>",D:"라","D#":"라<i class='--accidentals-circle'>©</i>","D##":"라"+double_sharp("#fff"),Ebb:"마<i class='--accidentals-circle'>¨¨</i>",Eb:"마<i class='--accidentals-circle'>¨</i>",E:"마","E#":"마<i class='--accidentals-circle'>©</i>","E##":"마"+double_sharp("#fff"),Fbb:"바<i class='--accidentals-circle'>¨¨</i>",Fb:"바<i class='--accidentals-circle'>¨</i>",F:"바","F#":"바<i class='--accidentals-circle'>©</i>","F##":"바"+double_sharp("#fff"),Gbb:"사<i class='--accidentals-circle'>¨¨</i>",Gb:"사<i class='--accidentals-circle'>¨</i>",G:"사","G#":"사<i class='--accidentals-circle'>©</i>","G##":"사"+double_sharp("#fff"),Abb:"가<i class='--accidentals-circle'>¨¨</i>",Ab:"가<i class='--accidentals-circle'>¨</i>",A:"가","A#":"가<i class='--accidentals-circle'>©</i>","A##":"가"+double_sharp("#fff"),Bbb:"나<i class='--accidentals-circle'>¨¨</i>",Bb:"나<i class='--accidentals-circle'>¨</i>",B:"나","B#":"나<i class='--accidentals-circle'>©</i>","B##":"나"+double_sharp("#fff"),},guitarSettings:{open_string_notes_guitar:["마","가","라","사","나","마"],},text_before_root_note:"",text_after_root_note:" ",root_note_dropdown:{C:"C",D:"D",E:"E",F:"F",G:"G",A:"A",B:"B",},element_dropdown:{unison:"1도",minor_second:"단2도",major_second:"장2도",minor_third:"단3도",major_third:"장3도",perfect_fourth:"완전4도",augmented_fourth:"증4도",diminished_fifth:"감5도",perfect_fifth:"완전5도",minor_sixth:"단6도",major_sixth:"장6도",minor_seventh:"단7도",major_seventh:"장7도",octave:"옥타브",minor_ninth:"단9도",major_ninth:"장9도",minor_tenth:"단10도",major_tenth:"장10도",},};