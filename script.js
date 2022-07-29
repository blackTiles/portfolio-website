
function showHtmlProjects(){
    let htm_projects = document.querySelector('.html-projects');
    let html_box = document.querySelector('#project-box-html');
    if(htm_projects.style.display == 'flex'){
        htm_projects.style.display="none";
        html_box.style.background="none";
    }
    else{
        htm_projects.style.display="flex";
        html_box.style.background="rgba(197, 192, 192, 0.397)";
    }
}

