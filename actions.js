import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    comments: [
        {
            text: 'ABC',
            id: 1,
            points: 0
        },
        {
            text: 'DEF',
            id: 2,
            points: 0
        }
    ]
}

{
    type: ADD_COMMENT;
    text: 'text';
    id: 1
}

{
    type: EDIT_COMMENT;
    text: 'text';
    id: 1
}

{
    type: REMOVE_COMMENT;
    id: 1
}

{
    type: THUMB_UP_COMMENT;
    id: 1;
    points: points + 1
}

{
    type: THUMN_DOWN_COMMENT;
    id: 1;
    points: points-1
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4,
        points: 0
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        points: points + 1
    }
}

function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        points: points - 1
    }
}