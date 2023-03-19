"use strict";

const form = document.querySelector('[data-search-form]');
const fieldName = document.querySelector('[data-field-name]');
const errorClass = 'search__error';
const displayListRepositories = document.querySelector('[data-repositories-list]');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (fieldName.value.trim().length < 3) {
        fieldName.classList.add(errorClass);
        return;
    }

    getRepositories(fieldName.value);
});

const getRepositories = async name => {
    await fetch(`https://api.github.com/search/repositories?q=${name}&per_page=10`)
        .then(response => response.json())
        .then(data => addComment(data));
}

fieldName.addEventListener('input', e => {
    if (fieldName.classList.contains(errorClass)) {
        fieldName.classList.remove(errorClass);
    }
});


const addComment = data => {

    if(!data.total_count) {
        displayListRepositories.innerHTML = '';
        toggleClassCommentsEmptyText(true);
        return;
    }

    const layoutComment = (userName, userLink, repoName, repoLink) => `
        <li class="repositories__li" data-repositories-item>
            <div class="repositories__top">
                <p class="repositories__info">
                    <a href="${userLink}" target="_blank">${userName}</a>
                    <a href="${repoLink}" target="_blank">${repoName}</a>
                </p>
                <button class="repositories__btn-remove">
                    <svg>
                        <use xlink:href="img/icons.svg#remove" data-repositories-remove="true"></use>
                    </svg>
                    <span class="visually-hidden">remove</span>
                </button>
            </div>
            <p class="repositories__text">${userLink}</p>
        </li>
    `;

    data.items.forEach(item => {
        const userName = item.owner.login;
        const userLink = item.owner.html_url;
        const repoName = item.name;
        const repoLink = item.svn_url;
        displayListRepositories.innerHTML += layoutComment(userName, userLink, repoName, repoLink);
    });

    toggleClassCommentsEmptyText();
}

displayListRepositories.addEventListener('click', e => {
    if (e.target.dataset.repositoriesRemove) {
        removeSearchItem(e.target);
        toggleClassCommentsEmptyText();
    }
});

const toggleClassCommentsEmptyText = (isEmpty = false) => {
    const textEmptyComments = document.querySelector('[data-repositories-text-empty]');
    textEmptyComments.innerText = isEmpty ? 'Ничего не найдено' : 'Пусто';
    if (displayListRepositories.querySelector('[data-repositories-item]')) {
        textEmptyComments.classList.add('visually-hidden');
    } else {
        textEmptyComments.classList.remove('visually-hidden');
    }
};
const removeSearchItem = elem => elem.closest('[data-repositories-item]').remove();
