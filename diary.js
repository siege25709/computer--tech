class Diary {
    constructor() {
        this.notes = this.loadNotes();
    }

    loadNotes() {
        const notes = localStorage.getItem('diaryNotes');
        return notes ? JSON.parse(notes) : [];
    }

    saveNotes() {
        localStorage.setItem('diaryNotes', JSON.stringify(this.notes));
    }

    addNote(content) {
        const note = { id: Date.now(), content };
        this.notes.push(note);
        this.saveNotes();
    }

    editNote(id, newContent) {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.content = newContent;
            this.saveNotes();
        }
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
    }

    searchNotes(query) {
        return this.notes.filter(note => note.content.includes(query));
    }

    filterNotes(condition) {
        return this.notes.filter(note => condition(note));
    }
}

// Example usage:
const myDiary = new Diary();
myDiary.addNote('My first note!');
const searchResults = myDiary.searchNotes('first');
console.log(searchResults);

