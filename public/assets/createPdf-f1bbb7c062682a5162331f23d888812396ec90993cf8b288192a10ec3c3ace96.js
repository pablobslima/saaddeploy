function geraPdf(t,e,n,o,i,a,r,s,l){var d=new jsPDF("p","pt"),g=document.getElementById("tabela_resultados"),S=d.autoTableHtmlToJson(g),F=n+"\n\n\n"+o+"\n\n\n"+i,T=d.splitTextToSize(F,900),p=r+"\n\n\n"+s+"\n\n\n"+l,z=d.splitTextToSize(p,900),b={beforePageContent:function(){var e="\xc2ncoras de carreira: "+t,n=d.internal.pageSize.width/2-d.getStringUnitWidth(e)*d.internal.getFontSize()/2;d.setFont("times"),d.setFontType("bold"),d.setFontSize(14),d.text(e,n,20)},afterPageContent:function(){e="1.0 "+e;var t=e,n=d.internal.pageSize.width/2-d.getStringUnitWidth(e)*d.internal.getFontSize()/2;d.setFontType("bold"),d.setFontSize(12),d.text(t,n,d.autoTableEndPosY()+50),d.setFontType("normal"),d.setFontSize(10),d.text(20,d.autoTableEndPosY()+100,T),d.addPage(),a="2.0 "+a;var o=a,n=d.internal.pageSize.width/2-d.getStringUnitWidth(a)*d.internal.getFontSize()/2;d.setFontType("bold"),d.setFontSize(12),d.text(o,n,40),d.setFontType("normal"),d.setFontSize(10),d.text(20,80,z)}};d.autoTable(S.columns,S.rows,b),d.save("table.pdf")}