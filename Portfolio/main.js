
//Portifolio

let meuBoolean = false;
const trocarBotao = document.getElementById('pf_butt');

let el = document.getElementById('port_rt');

function inverterValor() {
    meuBoolean = !meuBoolean;
    console.log(meuBoolean)
    troca()
  }

  function troca()
  { if(meuBoolean == true)
    {el.classList.remove('Dstv');
    el.classList.add('Atv');
    }
    else
    {el.classList.remove('Atv');
    el.classList.add('Dstv');}
  }

  trocarBotao.addEventListener('click', inverterValor);
 console.log(meuBoolean)




//Masacara

function mascara_telefone()
    {
        var tel = document.getElementById("tel").value
            console.log(tel)
        tel = tel.slice(0,14)
            console.log(tel)
        document.getElementById("tel").value = tel

        var tel_for = document.getElementById("tel").value
        if(tel_for[0]!="(")
        {
            if(tel_for[0]!=undefined)
            {
                document.getElementById("tel").value = "(" + tel_for[0];
            }
        }


        if (tel_for[3]!=")")
        {
            if (tel_for[3]!=undefined)
            {
                document.getElementById("tel").value= tel_for.slice(0,3)+")"+ " " +tel_for[3]
            }
        }

        if (tel_for[9]!="-")
        {
            if (tel_for[9]!=undefined)
            {
                document.getElementById("tel").value= tel_for.slice(0,9)+"-"+tel_for[9]
            }
        }
    }





//Mascara nome
      function masc_name(){

        let nome = document.getElementById("inp_nome").value  ;
    
        if(nome.charAt(0) != "")
        {
            let splitted = nome.split(" ")
            nome = nome.charAt(0).toUpperCase() + nome.substring(1);
    
            for(let i = 0; i < splitted.length; i++)
            {
              splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].substring(1);
    
    
                completeText = splitted.join(" ");
                document.getElementById("inp_nome").value = completeText;
            }
        }

    }