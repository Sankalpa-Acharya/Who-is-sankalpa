let green=document.getElementsByClassName('green')[0];
let yellow=document.getElementsByClassName('yellow')[0];
let red=document.getElementsByClassName('red')[0];
command_list=[];
green.addEventListener('click',greenclicked);
yellow.addEventListener('click',yellowclicked);
red.addEventListener('click',redclicked);
green_time=0;
yellow_time=0;
function greenclicked(){
    let terminal=document.getElementsByClassName('terminal')[0];
    let top=document.getElementsByClassName('top')[0];
    let textarea=document.getElementsByClassName('textarea')[0];
    terminal.removeAttribute('style')
    top.removeAttribute('style')
    if (green_time==0){
        terminal.setAttribute('style','width:100vw;height:100vh;border-radius:0px');
        textarea.setAttribute('style','width:100vw;height:97vh');
        top.setAttribute('style','width:100vw;');
        green_time=1;
        yellow_time=0;
    }
    else if(green_time==1){
        terminal.removeAttribute('style')
        textarea.removeAttribute('style')
        top.removeAttribute('style')
        green_time=0;
    }
    
}

function redclicked(){
    alert(`You can't destroy the terminal`)
}

function yellowclicked(){
    let textarea=document.getElementsByClassName('textarea')[0];
    let top=document.getElementsByClassName('top')[0];
    let terminal=document.getElementsByClassName('terminal')[0];
    terminal.removeAttribute('style')
    textarea.removeAttribute('style')
    top.removeAttribute('style')
    if (yellow_time==0){
        terminal.setAttribute('style','top:72vh;');
        yellow_time=1;
        green_time=0;
    }
    else if(yellow_time==1){
        terminal.removeAttribute('style')
        textarea.removeAttribute('style')
        green_time=0;
        yellow_time=0;
    }

}


// ---------------------------------------------------------------------------------------------------

// Coding for terminal commands.

let command=document.getElementsByClassName('commands')[0];

command.addEventListener('keydown',keypress);
function keypress(e){
    if(e.key=='Enter'){
        let command=document.getElementsByClassName('commands')[0];
        commandhandler(command.value);
        command.value=''
        

    }
    
}

function commandhandler(value){

    let textarea=document.getElementsByClassName('textarea')[0];
    let history=document.getElementsByClassName('history')[0]
    let element=document.createElement('span');
    element.textContent='Sankalpa~ $'
    element.setAttribute('class','madebyjs');
  if(value==''){
      document.getElementsByClassName('commands')[0].autofocus='true';
      textarea.insertBefore(element,history)
    }
    else if(value=='cls'||value=='clear'){
        command_list.push(value)
        let madebyjs=document.getElementsByClassName('madebyjs');
        while (madebyjs[0]) {
            madebyjs[0].parentNode.removeChild(madebyjs[0]);
        }
        
    }
    else if(value=='history'){
        element.textContent=`Sankalpa~ $ ${value}`
        document.getElementsByClassName('commands')[0].autofocus='true';
        let p=document.createElement('p');
        if (command_list.length==0){

            p.textContent=`no history found`;
        }
        else{
            for(i in command_list){
            p.textContent=p.textContent+` ${parseInt(i)+1}. ${command_list[i]} , `;
            
        }}
        element.appendChild(p)
        textarea.insertBefore(element,history)
        command_list.push(value)
}
else if(value=='c history'){
    command_list=[];
}
else if(value=='ls'){
    command_list.push(value)
    element.textContent=`Sankalpa~ $ ${value}`
    let p=document.createElement('p')
    let popo=localStorage.getItem('files');
    if(popo==null){

        p.textContent=`no files in system, use mkf command to create`
        element.appendChild(p)
        textarea.insertBefore(element,history)
    }
    else{
        let file=localStorage.getItem('files');
        file=JSON.parse(file);
        let filename=Object.keys(file);
        for(i in filename){

            p.textContent=p.textContent+`${filename[i]}.txt, `
        }
        textarea.insertBefore(element,history)
        element.appendChild(p)
    }
}
else if(value=='--help'){
    command_list.push(value)
    element.textContent=`Sankalpa~ $ ${value}`
    let div=document.createElement('div');
    let p=document.createElement('p');
    let pt=document.createElement('p');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('p');
    let p4=document.createElement('p');
    let p5=document.createElement('p');
    let p6=document.createElement('p');
    let p7=document.createElement('p');
    let p8=document.createElement('p');
    let p11=document.createElement('p');
    let p9=document.createElement('b');
    let p10=document.createElement('b');
    p.textContent=`--------------------------these commands will work----------------------------------------------`
    div.appendChild(p)
    p1.textContent=`ls -list files in system`
    div.appendChild(p1)
    p2.textContent=`cls/clear -clear terminal`
    div.appendChild(p2)
    p3.textContent=`history -typed commands`
    div.appendChild(p3)
    p4.textContent=`c history -clear history`
    div.appendChild(p4)
    element.appendChild(div);
    p5.textContent=`mkf -create text file`
    div.appendChild(p5)
    element.appendChild(div);
    textarea.insertBefore(element,history);
    p6.textContent=`rf -delete text file`
    div.appendChild(p6)
    element.appendChild(div);
    textarea.insertBefore(element,history);
    p7.textContent=`read -read text file`
    div.appendChild(p7)
    element.appendChild(div);
    p11.textContent=`exit -erase everything`
    div.appendChild(p11)
    element.appendChild(div);
    textarea.insertBefore(element,history);
    p8.textContent=`open -open website`
    div.appendChild(p8)
    element.appendChild(div);
    textarea.insertBefore(element,history);
    p9.textContent=`who is sankalpa -ABOUT ME`
    p9.setAttribute('class','p9')
    div.appendChild(p9)
    element.appendChild(div);
    textarea.insertBefore(element,history);
    p10.textContent=`contact sankalpa -CONTACT ME`
    div.appendChild(p10)
    element.appendChild(div);
    textarea.insertBefore(element,history);
}
else if(value=='mkf'){
    let filename=prompt('Enter file name');
    let content=prompt('Enter your content');
    let getvalue=localStorage.getItem('files')
    command_list.push(value)
    if(getvalue==null){
        console.log('in if')
        let object={}
        object[filename]=content
        localStorage.setItem('files',JSON.stringify(object));
    }
    else{
        let object=JSON.parse(localStorage.getItem('files'));
        console.log(object)
        object[filename]=content;
        localStorage.setItem('files',JSON.stringify(object));
    }

}
else if(value=='rf'){
    command.value=''
    let filename=prompt('Enter file name');
    let object=JSON.parse(localStorage.getItem('files'));
    command_list.push(value)
  if(Object.keys(object).length==1){
      localStorage.clear()
  }
  else{
      delete object[filename]
      localStorage.setItem('files',JSON.stringify(object));
  }

}
else if(value=='read'){
    command.value=''
    let filename=prompt('Enter file name');
  let object=JSON.parse(localStorage.getItem('files'));  
  command_list.push(value)
  if(filename in object){
      element.textContent=`Sankalpa~ $ ${filename}.txt`
      let p=document.createElement('p')
      p.textContent=`${object[filename]}`
      element.appendChild(p)
      textarea.insertBefore(element,history)
  }
  else{
    element.textContent=`Sankalpa~ $ ${filename}.txt`
    let p=document.createElement('p')
    p.textContent=`${filename}.txt not found`
    element.appendChild(p)
    textarea.insertBefore(element,history)
  }
}
else if(value=='open'){
    let website=prompt('Enter webiste name:');
        website=`https://${website}.com`
        window.location.href=website

}
else if(value=='exit'){
    document.documentElement.innerHTML='<h1>You closed me :( </h1> <br><b>Refresh to get terminal back</b>'
}
else if(value=='who is sankalpa'){
    let madebyjs=document.getElementsByClassName('madebyjs');
    while (madebyjs[0]) {
        madebyjs[0].parentNode.removeChild(madebyjs[0]);
    }
    command_list.push(value)
    element.textContent=`Sankalpa~ $ ${value}`
    let p=document.createElement('p');
    let info=`Hello ,My name is sankalpa acharya. I am 17 years old boy who is much intrested in learning new technology and playing with them.I am student and as well as a noob bug bounty hunter. Sometimes for fun I play games or Hack my friends accounts and troll them, with social engineering ofcourse ;) So,This is my intro and what about you ? I will be happy hearing your intro too ! But you cannot talk to me beacuse here is no feature for that :( may be i am lazy or might be busy haha, oops ! I need to go people are calling me and I work as superhero sometimes ok byeeee oh where is my suite ?ok got!!`
    
    p.textContent=info
    element.appendChild(p)
    textarea.insertBefore(element,history);
}
else if(value=='contact sankalpa'){
    window.location.href='https://facebook.com/sankalpa02'
}
else{
    command_list.push(value)
    element.textContent=`Sankalpa~ $ ${value}`
    let p=document.createElement('p')
    p.textContent=`'${value}'  is not recognized as internal or external command`
    element.appendChild(p)
    textarea.insertBefore(element,history)
      
  }

}