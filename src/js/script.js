const form = document.querySelector('[data-form]');
const fieldName = document.querySelector('[data-field-name]');
const fieldComment = document.querySelector('[data-field-comment]');
const fieldDate = document.querySelector('[data-field-date]');
const errorClass = 'form-comment__error';

form.addEventListener('submit', e => {
    e.preventDefault();

    if(!validateField()) return;

    const name = fieldName.value;
    const comment = fieldComment.value;
    const date = formattedDate(fieldDate.value);

    addComment(name, comment, date);
});

const formattedDate = value => {
    const curDate = new Date();

    const formattedDay = day => day < 10 ? `0${day}` : day;
    const formattedMonth = month => month < 9 ? `0${month + 1}` : month + 1;

    if(!value) {
        return `Сегодня ${formattedDay(curDate.getDate())}.${formattedMonth(curDate.getMonth())}`;
    }

    const dateValue = new Date(value);

    if(curDate.getDate() - dateValue.getDate() === 1 && curDate.getMonth() === dateValue.getMonth() && curDate.getFullYear() === dateValue.getFullYear()) {
        return `Вчера ${formattedDay(dateValue.getDate())}.${formattedMonth(dateValue.getMonth())}`;
    }

    return `${formattedDay(dateValue.getDate())}.${formattedMonth(dateValue.getMonth())}`;
}

const validateField = () => {
    const isName = fieldName.value.trim().length > 2;
    const isComment = fieldComment.value.trim().length > 2;
    if(!isName || !isComment) {
        if(!isName) {
            fieldName.classList.add(errorClass);
        }
        if(!isComment) {
            fieldComment.classList.add(errorClass);
        }
        return false;
    }
    return true;
}

fieldName.addEventListener('input', e => removeErrorClass(e.target));
fieldComment.addEventListener('input', e => removeErrorClass(e.target));

const removeErrorClass = field => field.classList.contains(errorClass) ? field.classList.remove(errorClass) : false;

const sectionComments = document.querySelector('[data-comments]');

const addComment = (name, comment, date) => {
    const layoutComment = `
        <article class="comments__item" data-comment-item>
            <header>
                <div class="comments__top">
                    <h3 class="comments__name">${name}</h3>
                    <button class="comments__btn-remove">
                        <svg>
                            <use xlink:href="img/icons.svg#remove" data-comment-remove="true"></use>
                        </svg>
                        <span class="visually-hidden">remove</span>
                    </button>
                </div>
                <p class="comments__text">${comment}</p>
                <div class="comments__bot">
                    <time class="comments__date">${date}</time>
                    <button type="button" class="comments__like" data-comment-like-btn>
                        <svg>
                            <use xlink:href="img/icons.svg#like" data-comment-like="true"></use>
                        </svg>
                        <span class="visually-hidden">Like</span>
                    </button>
                </div>
            </header>
        </article>
    `;

    sectionComments.innerHTML += layoutComment;

    toggleClassCommentsEmptyText();
}

sectionComments.addEventListener('click', e => {
    if(e.target.dataset.commentRemove) {
        removeComment(e.target);
        toggleClassCommentsEmptyText();
    }
    if(e.target.dataset.commentLike) {
        toggleClassLike(e.target);
    }
});

const toggleClassCommentsEmptyText = () => {
    const textEmptyComments = document.querySelector('[data-comments-text-empty]');
    if(sectionComments.querySelector('[data-comment-item]')) {
        textEmptyComments.classList.add('visually-hidden');
    } else {
        textEmptyComments.classList.remove('visually-hidden');
    }
};
const removeComment = elem => elem.closest('[data-comment-item]').remove();
const toggleClassLike = elem => elem.closest('[data-comment-like-btn]').classList.toggle('active');
