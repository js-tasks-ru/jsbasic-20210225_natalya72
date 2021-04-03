function highlight(table) {
  for(let i=0; i < table.rows.length; i++){
    let row = table.rows[i];
      for(let j=0; j < row.cells.length; j++){

        if(row.cells[j].hasAttibute("data-available")){
          row.cells[i].hidden
        }
        // row.cells[j]
    }
  }
  // document.querySelector('[data-available]').classList.add("available");

}
