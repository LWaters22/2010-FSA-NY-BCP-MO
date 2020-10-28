
_______________________________
     O    
		\|/  Movie Screen 
     |     Fun Movie
	  / \
_______________________________

X X X X X X   
X X X X X X
X X X X X X
X X X X X X
X X X X X X
X X X X X X   

function getMyRow(me) {
	if(person is in front row){
		row = 1
		return row;
	} else {
		my row =  1 + getMyRow(person in front of me)
		return my row
	}
}



















