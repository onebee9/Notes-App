
 function NotesApplication(author)
{
	this.author = author;
	this.notes = [];
}
// function to create note
NotesApplication.prototype.create = function(new_content) 
{
	this.notes.push(new_content);
};
//function to list notes
NotesApplication.prototype.list_note = function()
  {
  	for (var i = 0; i< this.notes.length; i++)
  	{
  		console.log("Notes ID " + i );
  		console.log(this.notes[i] + "\n");
  		console.log("By Author " + this.author + "\n");
  	}
            
  } ; 

//function to delete note
NotesApplication.prototype.delete_note = function(note_id) 
{
	// splice([indexofItem], [howManyItemsFromIndex])
	this.notes = this.notes.splice(note_id, 1);
};
//function to edit note
NotesApplication.prototype.edit = function(note_id,new_content) 
{
	this.delete_note(note_id);
	this.create(new_content);
};
//function to retrieve note by id
NotesApplication.prototype.get_note = function(note_id) 
{
	return this.notes[note_id];
};
//function to search through array....not sure about this.
NotesApplication.prototype.search= function(note_id) 
{
	var searcharray = this.notes.length;
	for (var i = 0; i < searcharray; i++) 
	{
		for( var note_id in this.notes){
			return get_note(note_id)
		}
	};
};

var noteapplication = new NotesApplication('felix','a man of words');
// dummy input
noteapplication.create("sueg");
noteapplication.create("fly");

