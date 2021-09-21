//preenche a lista
const links = ['Algoritimos e Lógica', 'Análise de Sistemas',
     'Arquitetura de Computadores', 'Gestão Empresarial I', 
     'Inglês Instrumental', 'Linguagem de Programação I ', 'Linguagens e Multimeios',
     'Banco de Dados I', 'Engenharia de Software I',
      'Linguagem de Programação II', 'Matemática computacional', 
     'Metodologia Científica', 'Sistemas Operacionais ', 'Tecnologia e Sociedade I',
     'Banco de Dados II', 'Engenharia de Software II',
     'Estatistica Basica', 'Estrutura de Dados', 
     'Tecnologia e Sociedade II', 'Orientação a Objetos I',
      'Dev Web I',
     'Gestão de Projetos', 'Orientação a Objetos II',
      'Programação Visual', 'Redes de Computadores', 
     'Legislação e Ética', 'Dev Web II ', 
     'Dispositivos Móveis', 
     'Projeto de Análise de Sistemas', 'Inteligência Artificial',
     'Gestão Empresarial II', 'Segurança de Sistemas', 
    'Dev Web III', 'Plano de Negócios ', 
    'Programação Paralela e Distribuída', 'Projeto de Desenvolvimento de Sistemas', 
    'Sistemas Embarcados', 'Optativa'];

//const links = populateList();

//==============================================================================================================

const html = {
    get(element){
        return document.querySelector(element);
    }
}

let perPage = 7;

const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(links.length / 7),

    maxVisibleButtons: 2
}

const controls = {
    
    next(){
        state.page++;
        const lastPage = state.page > state.totalPage;
        if(lastPage){
            state.page--;
        }
    },
    prev(){
        state.page--;

        if(state.page < 1){
            state.page++;
        }
    },
    goTo(page){
        if(page < 1){
            page = 1;
        }

        state.page = +page;

        if(page > state.totalPage){
            state.page = state.totalPage;
        }
    },
    createListeners(){
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1)
            update()
            
        })

        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage)
            update()
            
        })

        html.get('.next').addEventListener('click', () => {
            controls.next()
            update()
            
        })

        html.get('.prev').addEventListener('click', () => {
            controls.prev()
            update()
            
        })
    }

}

const list = {
    create(item){
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML=item

        html.get('.list').appendChild(div)
    },
    update(){
        html.get('.list').innerHTML = "";

        let page = state.page;

        if(page <= 2){
            page = state.page - 1;
            let start = page * state.perPage;
            let end = start + state.perPage;
            const paginatedItems = links.slice(start,end);
            paginatedItems.forEach(list.create);
        }else
        {
            
            if(state.page == 3){
                page = state.page - 1;
                let p = 6
                let start = page * state.perPage;
                let end = start + p;
                const paginatedItems = links.slice(start,end);
                paginatedItems.forEach(list.create);
            }else{
                if(state.page==4){
                   page = state.page - 1;
                    let p = 6
                    let start = (page * 7)-1;
                    let end = start + p;
                    const paginatedItems = links.slice(start,end);
                    paginatedItems.forEach(list.create); 
                }else if(state.page == 5){
                    page = state.page - 1;
                    let p = 6
                    let start = (page * 7)-2;
                    let end = start + p;
                    const paginatedItems = links.slice(start,end);
                    paginatedItems.forEach(list.create); 
                }else if(state.page == 6){
                    page = state.page - 1;
                    let p = 6
                    let start = (page * 7)-3;
                    let end = start + p;
                    const paginatedItems = links.slice(start,end);
                    paginatedItems.forEach(list.create); 
                }
                
            }
        }

        
    }
}

const buttons = {
    create(number){
        const button = document.createElement('div')

        button.innerHTML = number;

        if(state.page == number){
            button.classList.add('active')
        }

        button.addEventListener('click', (event) => {
            const page = event.target.innerText

            controls.goTo(page)
            update()
        })

        html.get('.pagination .numbers').appendChild(button)
    },
    update(){
        html.get('.pagination .numbers').innerHTML = ""

        const {maxLeft, maxRight} = buttons.calculateMaxVisible()

        for(let page = maxLeft; page <= maxRight; page++){
            buttons.create(page)
        }
    },
    calculateMaxVisible(){
        const { maxVisibleButtons } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons/2))
        let maxRight = (state.page + Math.floor(maxVisibleButtons/2))

        if (maxLeft<1){
            maxLeft = 1
            maxRight = maxVisibleButtons
        }
        if(maxRight > state.totalPage){
            maxLeft = state.totalPage - (maxVisibleButtons - 1)
            maxRight = state.totalPage
            if(maxLeft<1) maxLeft = 1
        }

        return{maxLeft, maxRight}
    }
}

function init(){
    update()
    controls.createListeners()
}

function update(){
    list.update()
    buttons.update()
}

init()



/*   
links:

http://meet.google.com/vmw-czvj-jwz


meet.google.com/mpm-ueqr-idm

 
meet.google.com/npy-wkko-wxn


http://meet.google.com/qyn-pjiy-wea


meet.google.com/ine-wmvo-yii


meet.google.com/mpm-ueqr-idm


meet.google.com/vhp-jbtv-vxm*/