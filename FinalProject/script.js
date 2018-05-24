function calcularTotal(){
  var table = document.getElementById("DynamicTable");
  var sumaNoches=0;
  var sumaComida=0;
  var sumaHospedaje=0;
  var sumaTransporte=0;
  var sumaTotalfila=0;
  var totalFinal=0;
  var precio_ida=parseInt(document.getElementById("precio_ida").value);
  var precio_vuelta=parseInt(document.getElementById("precio_vuelta").value);
  var totalFila=0;
  var presupuesto=parseInt(document.getElementById("presupuesto").value);


for(var i = 1; i < table.rows.length; i++){
      sumaNoches = sumaNoches + parseInt(table.rows[i].cells[2].innerHTML);
      sumaHospedaje = sumaHospedaje + parseInt(table.rows[i].cells[4].innerHTML);
      sumaComida = sumaComida + parseInt(table.rows[i].cells[5].innerHTML);
      sumaTransporte = sumaTransporte + parseInt(table.rows[i].cells[6].innerHTML);
      totalFila = totalFila + parseInt(table.rows[i].cells[7].innerHTML);
}

      totalFinal+=sumaComida+sumaHospedaje+sumaTransporte+precio_ida+precio_vuelta;
      document.getElementById("sumaNoches").innerHTML =sumaNoches;
      document.getElementById("sumaHospedaje").innerHTML =sumaHospedaje;
      document.getElementById("sumaComida").innerHTML =sumaComida;
      document.getElementById("sumaTransporte").innerHTML =sumaTransporte;
      document.getElementById("total").innerHTML =totalFinal;

}
