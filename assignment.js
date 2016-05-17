
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
	console.log(this.notes);
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
NotesApplication.prototype.search= function(search_text) 
{
	var originalNoteIndexes = []

	for( var i = 0; i <this.notes.length; i++){
		var indexOfSearchText = this.notes[i].indexOf(search_text);
		if (indexOfSearchText != -1)
		{
			originalNoteIndexes.push(i);	
		}
	}
	for (var index in originalNoteIndexes)
	{
		console.log("Notes ID " + i );
  		console.log(this.notes[index] + "\n");
  		console.log("By Author " + this.author + "\n");
	}
  		
	if (originalNoteIndexes.length === 0){
		return search_text+"  not found";
	}
};

var noteapplication = new NotesApplication('felix','a man of words');
noteapplication.create("sueg");
noteapplication.create("fly");

