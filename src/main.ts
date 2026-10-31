class User {
  public noteBooks: NoteBook[] = [];
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  constructor(
    public id: number,
    public name: string,
    public email: string,
    private _password: string,
    protected phone: string,
    public age: number,
  ) {
    if (this.age < 18 || this.age > 60) {
      throw new Error("Invalid Age ");
    }
  }
  public displayInfo(): string {
    return `Hi Mr...${this.name} your info:
   id:${this.id},
   email:${this.email},
   phone:${this.phone},
   age:${this.age}
`;
  }
  public ownNoteBooks(noteBook: NoteBook): void {
    this.noteBooks.push(noteBook);
  }
}
console.log("********************User****************");
const user1 = new User(
  2200958,
  "ziad",
  "moaliziad@gmail.com",
  "hello123$%",
  "01206802113",
  22,
);
console.log(user1.age);
console.log(user1.displayInfo());

console.log("********************ADMIN****************");
class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    _password: string,
    phone: string,
    age: number,
  ) {
    super(id, name, email, _password, phone, age);
  }
  manageNotes(note: string): void {
    console.log(
      `Admin can manage ${note} so he can update,delete and adding Notes`,
    );
  }
}
const admin1 = new Admin(
  2200952,
  "ali",
  "ali@gmail.com",
  "Hello13$#",
  "01206802117",
  55,
);
admin1.manageNotes("The Greatest Book");

console.log("********************Note****************");
class Note {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public userId: User,
    public author: User,
  ) {}
  public preview(): void {
    console.log(`The content of Note is:${this.content.slice(0, 10)}`);
  }
}
const note1 = new Note(
  1010,
  "Greatest",
  "CR7 is The Greatest of all Time",
  user1,
  user1,
);
note1.preview();
console.log(note1.userId.id);
console.log(note1.author.name);

console.log("********************NoteBook****************");
class NoteBook {
  public notes: Note[] = [];
  public addNote(note: Note): void {
    this.notes.push(note);
  }
  public removeNote(note: Note): Note[] {
    const index = this.notes.findIndex((ele) => ele === note);
    if (index === -1) {
      throw new Error("Invalid Note");
    }
    return this.notes.splice(index, 1);
  }
}
const noteBook1 = new NoteBook();
const noteBook2 = new NoteBook();
noteBook1.addNote(note1);
console.log(noteBook1.notes);

const user2 = new User(
  22010,
  "eslam",
  "eslam@gmail.com",
  "ziad12$%0",
  "0106586145",
  41,
);

user1.ownNoteBooks(noteBook1);
user1.ownNoteBooks(noteBook2);
console.log(user2.noteBooks);

noteBook1.removeNote(note1);
console.log(noteBook1.notes);

console.log("********************Storage****************");
class ItemStorage<T> {
  public items: T[] = [];
  public addItem(item: T): void {
    this.items.push(item);
  }
  public removeItem(item: T): T[] {
    const index = this.items.findIndex((ele) => ele === item);
    if (index === -1) {
      throw new Error("Invalid Item!!");
    }
    return this.items.splice(index, 1);
  }
  public getAllItems(): T[] {
    return this.items;
  }
}
const storage1 = new ItemStorage<string>();
storage1.addItem("Messi");
console.log(storage1.items);
// storage1.removeItem("Messi");
// console.log(storage1.items);
storage1.getAllItems();
console.log(storage1.items);
