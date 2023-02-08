var sumbitbtn = document.getElementById('sumbitbtn')

sumbitbtn.addEventListener('click',function(e){
    e.preventDefault();
    var nameinput = document.getElementById('nameinput').value;
    var idnomberinput = document.getElementById('idnomberinput').value;
    var emailiput = document.getElementById('emailiput').value;
    var classidinput = document.getElementById('classidinput').value;
    var depertinput = document.getElementById('depertinput').value;

    if(nameinput==''){
        alert('Mistake your name')
    }else if(idnomberinput==''){
        alert('Mistake your id number')
    }else if(emailiput==''){
        alert('Mistake your email')
    }else if(classidinput==''){
        alert('Mistake your class')
    }else if(depertinput==''){
        alert('Mistake your depoartment')
    }else{
        var tablebdy = document.getElementById('tablebdy')
        var tr = document.createElement('tr')

        // for name
        var td = document.createElement('td')
        td.innerHTML=nameinput;
        tr.appendChild(td)
        tablebdy.appendChild(tr)

        // for id number

        var td = document.createElement('td')
        td.innerHTML=idnomberinput;
        tr.appendChild(td)
        tablebdy.appendChild(tr)

        // for email number
        var td = document.createElement('td')
        td.innerHTML=emailiput;
        tr.appendChild(td)
        tablebdy.appendChild(tr)

        // for class name

        var td = document.createElement('td')
        td.innerHTML=classidinput;
        tr.appendChild(td)
        tablebdy.appendChild(tr)

        // for depeartment

        var td = document.createElement('td')
        td.innerHTML=depertinput;
        tr.appendChild(td)
        tablebdy.appendChild(tr)

        // create a delete button

        var dltbtn = document.createElement('button')
        dltbtn.innerHTML='Delete'
        dltbtn.style.background='blue'
        dltbtn.style.color='white'
        dltbtn.style.padding='10px 20px'
        tr.appendChild(dltbtn)
        dltbtn.onclick=deletemytask
    }

    function deletemytask(){
        var myitem = this.parentNode;
        var trr = myitem.parentNode;
        trr.removeChild(myitem)
    }
})