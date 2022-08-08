{/* <script> */}

// Loading div js settin
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};

var _2d_list_ = []
var order_item_qty = []
var order_id_list = []
var order_item_id_list = []
var order_name_list = []
var order_price_list = []
var order_image_list = []
var customer_details_list = []
var sale_number = 0
let i = 0

var customerName;
var customerPhoneNumber;
var all_not_disabled = true;

  google.script.run.withSuccessHandler(set_list_of_customer_names).get_customer_full_names()
  google.script.run.withSuccessHandler(receive_get_sale_number).get_sale_number()

  //========================== TESTING 1 2 =========================================
    function clickedAProduct(){
        console.log("Well done you clicked a product image :)")
    }

    function receive_get_sale_number(gs_sale_number){
      // console.log("receive_sale_number function ran")
      sale_number = gs_sale_number+1
      document.getElementById("order_number").innerText = "0"+(sale_number)
      // console.log("Sale Number first time: " + sale_number)
      
}
  function hideSearch(){
    console.log("hideSearch clicked")
    document.getElementById("search_input_div").style.display = "none"
  }

  function searchProducts(){
    const newProducts= [];
    const searchBox = document.getElementById("search_item").value.toUpperCase()

    for (let row = 0; row < all_raw_products_list.length; row++){
      if(all_raw_products_list[row][0].toUpperCase().indexOf(searchBox) >-1){
        console.log(all_raw_products_list[row])
        newProducts.push(all_raw_products_list[row])
      }
    }
    load_products(newProducts)
    console.log(newProducts)


  }

  // function noSearchResults(){
  //   let main_row = document.getElementById("main_row") // div tag
  //   main_row.innerHTML = ""
  //   const h2Elem = document.createElement("h2")
  //   const h2Text = document.createTextNode("Not Found :(")
  //   h2Elem.appendChild(h2Text)
  //   main_row.appendChild(h2Elem)
  // }
  

  google.script.run.withSuccessHandler(load_products).get_product_list()

  var all_raw_products_list = [];

  function load_products(list_of_products){
    if(all_raw_products_list.length <1){
      all_raw_products_list = list_of_products
    }

    if(list_of_products.length <1){
      console.log("No results Found!")
      // noSearchResults()
    }

    console.log("ALL PRODUCTS -------------------")
    console.log(list_of_products)
    var id_number = 1
    document.getElementById("all_products_grid_list").innerHTML = ""
    document.getElementById("ubuntu_products_grid_list").innerHTML = ""
    document.getElementById("rock_products_grid_list").innerHTML = ""
    document.getElementById("agrico_products_grid_list").innerHTML = ""

    // console.log(list_of_products)
    for (let row = 0; row < list_of_products.length; row++){

      load_all_tab_products(id_number, list_of_products, row)

      if (list_of_products[row][3] === "ubuntu"){
          load_ubuntu_tab_products(id_number, list_of_products, row)

        } else if (list_of_products[row][3] === "rock"){
            // console.log("Else loaded!")
            load_rock_tab_products(id_number, list_of_products, row)

        } else if (list_of_products[row][3] === "agrico"){
            // console.log("Else loaded!")
            load_agrico_tab_products(id_number, list_of_products, row)

        } // else if[1]
      } // for
    }// function


  function send_order_invoice(){
    // console.log("INVOICE SENT :)")
  }
  

  function load_orders(list_of_orders){

      var id_number = 1000
    

    for (let row = 0; row < list_of_orders.length; row++){

      if(list_of_orders[row][8] == 'true' && list_of_orders[row][9]== 'true'){

      } else {
         load_all_orders(id_number, list_of_orders, row)
      }

    }
  }

  function load_laters(list_of_laters){
    // console.log("load_laters function ran")

      var id_number = 1000
    

    // for (let row = 0; row < list_of_laters.length; row++){

    //   if(list_of_laters[row][8] == 'true' && list_of_laters[row][9]== 'true'){

    //   } else {
    //      load_all_laters(id_number, list_of_laters, row)
    //   }

    // }
  }

      // <li class="mt-3 ms-2 card d-flex bd-highlight" style="width:500px">
      //     <span class="card-body mt-0 mx-2">

      //           <span class="d-flex justify-content-between align-items-center mb-2">
      //                   <span class="bd-highlight"> <img src="https:Mbilu-Femme.png" class="rounded border" style="width: 50px;"> </span>
      //                   <span class="px-3 bd-highlight"> Mbilu Femme </span>
      //                   <span class="text-danger bd-highlight"> R164.99 </span>
      //                   <span class="px-3 ms-1 fw-bold bd-highlight"> 1 </span>
      //           </span>

      //           <span class="d-flex justify-content-between align-items-center">
      //                   <span class="bd-highlight" style="font-size: 13px;"> Khanya Meyiswa </span>
      //                   <span class="px-3 bd-highlight" style="font-size: 13px;"> 0812755841 </span>
      //                   <span class="bd-highlight" style="font-size: 13px;"> 22-May-2022 </span>
      //           </span>


      //     </span>
      //   </li>

  function load_all_orders(id_number, order_list, row){

      let ul_tag = document.getElementById("orders_ul") // ul tag

      // <li class="mt-3 ms-2 card d-flex bd-highlight" style="width:500px">
          const li_tag = document.createElement("li")
          li_tag.className = "mt-3 ms-2 card d-flex bd-highlight"
          li_tag.style = "width:500px"
          ul_tag.appendChild(li_tag)

          

            // <span class="card-body mt-0 mx-2">
                const card_body_span_tag = document.createElement("span")
                card_body_span_tag.className = "card-body mt-0 mx-2"
                li_tag.appendChild(card_body_span_tag)


                          // <span class="d-flex justify-content-between align-items-center">
                              const s2nd_dflex_span_tag = document.createElement("span")
                              s2nd_dflex_span_tag.className = "d-flex justify-content-between align-items-center"
                              card_body_span_tag.appendChild(s2nd_dflex_span_tag)


                                  // <span class="bd-highlight" style="font-size: 13px;"> Khanya Meyiswa </span>
                                    var order_customer_full_name = order_list[row][4]
                                      const first_span_s2nd_dflex_span_tag = document.createElement("span")
                                      first_span_s2nd_dflex_span_tag.className = "bd-highlight"
                                      first_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      first_span_s2nd_dflex_span_tag.innerText = order_customer_full_name /// --------------------- #6 -----------
                                      s2nd_dflex_span_tag.appendChild(first_span_s2nd_dflex_span_tag)


                                  // <span class="px-3 bd-highlight" style="font-size: 13px;"> 0812755841 </span>
                                      var order_phone_number = order_list[row][5]
                                      const second_span_s2nd_dflex_span_tag = document.createElement("span")
                                      second_span_s2nd_dflex_span_tag.className = "px-3 bd-highlight"
                                      second_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      second_span_s2nd_dflex_span_tag.innerText = "0"+order_phone_number /// --------------------- #7 -----------
                                      s2nd_dflex_span_tag.appendChild(second_span_s2nd_dflex_span_tag)

                                  // <span class="bd-highlight" style="font-size: 13px;"> 22-May_2022 </span>
                                  var order_date = order_list[row][7]
                                      const third_span_s2nd_dflex_span_tag = document.createElement("span")
                                      third_span_s2nd_dflex_span_tag.className = "bd-highlight"
                                      third_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      third_span_s2nd_dflex_span_tag.innerText = order_date /// --------------------- #8 -----------
                                      s2nd_dflex_span_tag.appendChild(third_span_s2nd_dflex_span_tag)
                        // </span>

//----------------------------------------------------------------------------------------------------------------------------------

                          // <hr class="mt-1">
                              const f1st_hr_tag = document.createElement("hr")
                              f1st_hr_tag.className = "mt-1"
                              card_body_span_tag.appendChild(f1st_hr_tag)

//----------------------------------------------------------------------------------------------------------------------------------

                    // <span class="d-flex justify-content-between align-items-center mb-2">
                      const f1st_dflex_span_tag = document.createElement("span")
                      f1st_dflex_span_tag.className = "d-flex justify-content-between align-items-center mb-2"
                      card_body_span_tag.appendChild(f1st_dflex_span_tag)

                      // <span class="bd-highlight"> 
                              // const first_span_f1st_dflex_span_tag = document.createElement("span")
                              // first_span_f1st_dflex_span_tag.className = "bd-highlight"
                              // f1st_dflex_span_tag.appendChild(first_span_f1st_dflex_span_tag)


                            // <img src="https://i.ibb.co/BnNByRL/Mbilu-Femme.png" class="rounded border" style="width: 50px;"> 
                                //  var order_prod_img_url = order_list[row][3]
                                //  const img_tag_of_first_span_f1st_dflex_span_tag = document.createElement("img")
                                // img_tag_of_first_span_f1st_dflex_span_tag.className = "rounded border"
                                // img_tag_of_first_span_f1st_dflex_span_tag.src = order_prod_img_url /// --------------------- #2 -----------
                                // img_tag_of_first_span_f1st_dflex_span_tag.style = "width:50px"
                                // img_tag_of_first_span_f1st_dflex_span_tag.draggable = false
                                // first_span_f1st_dflex_span_tag.appendChild(img_tag_of_first_span_f1st_dflex_span_tag)


                          // </span>

                          // <span class="px-3 bd-highlight"> Mbilu Femme </span>
                              var order_product_name = order_list[row][0]
                              const second_span_f1st_dflex_span_tag = document.createElement("span")
                              second_span_f1st_dflex_span_tag.className = "px-1 bd-highlight"
                              f1st_dflex_span_tag.appendChild(second_span_f1st_dflex_span_tag)
                              second_span_f1st_dflex_span_tag.innerText = order_product_name /// --------------------- #3 -----------


                          // <span class="text-danger bd-highlight"> R164.99 </span>
                              var order_price = order_list[row][1]
                              const third_span_f1st_dflex_span_tag = document.createElement("span")
                              third_span_f1st_dflex_span_tag.className = "text-danger bd-highlight"
                              third_span_f1st_dflex_span_tag.innerText = order_price /// --------------------- #4 -----------
                              f1st_dflex_span_tag.appendChild(third_span_f1st_dflex_span_tag)


                          // <span class="px-3 ms-1 fw-bold bd-highlight"> 1 </span>
                              var order_qty = order_list[row][2]
                              const forth_span_f1st_dflex_span_tag = document.createElement("span")
                              forth_span_f1st_dflex_span_tag.className = "px-1 ms-1 fw-bold bd-highlight"
                              forth_span_f1st_dflex_span_tag.innerText = order_qty /// --------------------- #5 -----------
                              f1st_dflex_span_tag.appendChild(forth_span_f1st_dflex_span_tag)
                      //</span>

                      // <span> (Note: Only available on Sundays) </span>
                      var order_note = order_list[row][6]
                      const note_span = document.createElement("span")
                      note_span.innerText = "(Note: " + order_note + ")"
                      card_body_span_tag.appendChild(note_span)

//----------------------------------------------------------------------------------------------------------------------------------

                      // <hr class="mt-1">
                              const s2nd_hr_tag = document.createElement("hr")
                              s2nd_hr_tag.className = "mb-1"
                              card_body_span_tag.appendChild(s2nd_hr_tag)

//----------------------------------------------------------------------------------------------------------------------------------

                    // <span class="d-flex justify-content-between">
                      const t3rd_dflex_span_tag = document.createElement("span")
                      t3rd_dflex_span_tag.className = "d-flex justify-content-between"
                      card_body_span_tag.appendChild(t3rd_dflex_span_tag)

                        // <div class="d-flex align-items-center form-check form-switch bd-highlight">
                         const f1st_div_tag = document.createElement("div")
                         f1st_div_tag.className = "d-flex align-items-center form-check form-switch bd-highlight"
                         t3rd_dflex_span_tag.appendChild(f1st_div_tag)

                              // <input class="form-check-input" type="checkbox">
                                  var order_invoice_toggle = "true" //order_list[row][8]
                                  const f1st_div_input_tag = document.createElement("input")
                                  f1st_div_input_tag.className = "form-check-input"
                                  f1st_div_input_tag.setAttribute("type", "checkbox")
                                  var checkStatus = "checked"
                                  if(order_list[row][8] == false){
                                      checkStatus = "unchecked"
                                  }
                                  f1st_div_input_tag.setAttribute(checkStatus, order_invoice_toggle)
                                  f1st_div_tag.appendChild(f1st_div_input_tag)

                              // <label class="form-check-label mx-2">Invoice sent </label>
                                const f1st_div_label_tag = document.createElement("label")
                                f1st_div_label_tag.className = "form-check-label mx-2"
                                f1st_div_label_tag.innerText = "Invoice Sent"
                                f1st_div_tag.appendChild(f1st_div_label_tag)

                        //</div>


                        // <div class="d-flex align-items-center form-check form-switch bd-highlight">
                         const s2nd_div_tag = document.createElement("div")
                         s2nd_div_tag.className = "d-flex align-items-center form-check form-switch bd-highlight"
                         t3rd_dflex_span_tag.appendChild(s2nd_div_tag)

                              // <input class="form-check-input mx-2" type="checkbox">
                                  const s2nd_div_input_tag = document.createElement("input")
                                  s2nd_div_input_tag.className = "form-check-input"
                                  s2nd_div_input_tag.setAttribute("type", "checkbox")
                                  s2nd_div_tag.appendChild(s2nd_div_input_tag)

                              // <label class="form-check-label">Solved </label>
                                const s2nd_div_label_tag = document.createElement("label")
                                s2nd_div_label_tag.className = "form-check-label mx-2"
                                s2nd_div_label_tag.innerText = "Solved"
                                s2nd_div_tag.appendChild(s2nd_div_label_tag)
                        //</div>






            // </span>
          // </li>
  }



  function load_all_laters(id_number, laters_list, row){

      let ul_tag = document.getElementById("orders_ul") // ul tag

      // <li class="mt-3 ms-2 card d-flex bd-highlight" style="width:500px">
          const li_tag = document.createElement("li")
          li_tag.className = "mt-3 ms-2 card d-flex bd-highlight"
          li_tag.style = "width:500px"
          ul_tag.appendChild(li_tag)

          

            // <span class="card-body mt-0 mx-2">
                const card_body_span_tag = document.createElement("span")
                card_body_span_tag.className = "card-body mt-0 mx-2"
                li_tag.appendChild(card_body_span_tag)


                          // <span class="d-flex justify-content-between align-items-center">
                              const s2nd_dflex_span_tag = document.createElement("span")
                              s2nd_dflex_span_tag.className = "d-flex justify-content-between align-items-center"
                              card_body_span_tag.appendChild(s2nd_dflex_span_tag)


                                  // <span class="bd-highlight" style="font-size: 13px;"> Khanya Meyiswa </span>
                                    var order_customer_full_name = laters_list[row][4]
                                      const first_span_s2nd_dflex_span_tag = document.createElement("span")
                                      first_span_s2nd_dflex_span_tag.className = "bd-highlight"
                                      first_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      first_span_s2nd_dflex_span_tag.innerText = order_customer_full_name /// --------------------- #6 -----------
                                      s2nd_dflex_span_tag.appendChild(first_span_s2nd_dflex_span_tag)


                                  // <span class="px-3 bd-highlight" style="font-size: 13px;"> 0812755841 </span>
                                      var order_phone_number = laters_list[row][5]
                                      const second_span_s2nd_dflex_span_tag = document.createElement("span")
                                      second_span_s2nd_dflex_span_tag.className = "px-3 bd-highlight"
                                      second_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      second_span_s2nd_dflex_span_tag.innerText = "0"+order_phone_number /// --------------------- #7 -----------
                                      s2nd_dflex_span_tag.appendChild(second_span_s2nd_dflex_span_tag)

                                  // <span class="bd-highlight" style="font-size: 13px;"> 22-May_2022 </span>
                                  var order_date = laters_list[row][7]
                                      const third_span_s2nd_dflex_span_tag = document.createElement("span")
                                      third_span_s2nd_dflex_span_tag.className = "bd-highlight"
                                      third_span_s2nd_dflex_span_tag.style = "font-size: 13px"
                                      third_span_s2nd_dflex_span_tag.innerText = order_date /// --------------------- #8 -----------
                                      s2nd_dflex_span_tag.appendChild(third_span_s2nd_dflex_span_tag)
                        // </span>

//----------------------------------------------------------------------------------------------------------------------------------

                          // <hr class="mt-1">
                              const f1st_hr_tag = document.createElement("hr")
                              f1st_hr_tag.className = "mt-1"
                              card_body_span_tag.appendChild(f1st_hr_tag)

//----------------------------------------------------------------------------------------------------------------------------------

                    // <span class="d-flex justify-content-between align-items-center mb-2">
                      const f1st_dflex_span_tag = document.createElement("span")
                      f1st_dflex_span_tag.className = "d-flex justify-content-between align-items-center mb-2"
                      card_body_span_tag.appendChild(f1st_dflex_span_tag)

                      // <span class="bd-highlight"> 
                              // const first_span_f1st_dflex_span_tag = document.createElement("span")
                              // first_span_f1st_dflex_span_tag.className = "bd-highlight"
                              // f1st_dflex_span_tag.appendChild(first_span_f1st_dflex_span_tag)


                            // <img src="https://i.ibb.co/BnNByRL/Mbilu-Femme.png" class="rounded border" style="width: 50px;"> 
                                //  var order_prod_img_url = laters_list[row][3]
                                //  const img_tag_of_first_span_f1st_dflex_span_tag = document.createElement("img")
                                // img_tag_of_first_span_f1st_dflex_span_tag.className = "rounded border"
                                // img_tag_of_first_span_f1st_dflex_span_tag.src = order_prod_img_url /// --------------------- #2 -----------
                                // img_tag_of_first_span_f1st_dflex_span_tag.style = "width:50px"
                                // img_tag_of_first_span_f1st_dflex_span_tag.draggable = false
                                // first_span_f1st_dflex_span_tag.appendChild(img_tag_of_first_span_f1st_dflex_span_tag)


                          // </span>

                          // <span class="px-3 bd-highlight"> Mbilu Femme </span>
                              var order_product_name = laters_list[row][0]
                              const second_span_f1st_dflex_span_tag = document.createElement("span")
                              second_span_f1st_dflex_span_tag.className = "px-1 bd-highlight"
                              f1st_dflex_span_tag.appendChild(second_span_f1st_dflex_span_tag)
                              second_span_f1st_dflex_span_tag.innerText = order_product_name /// --------------------- #3 -----------


                          // <span class="text-danger bd-highlight"> R164.99 </span>
                              var order_price = laters_list[row][1]
                              const third_span_f1st_dflex_span_tag = document.createElement("span")
                              third_span_f1st_dflex_span_tag.className = "text-danger bd-highlight"
                              third_span_f1st_dflex_span_tag.innerText = order_price /// --------------------- #4 -----------
                              f1st_dflex_span_tag.appendChild(third_span_f1st_dflex_span_tag)


                          // <span class="px-3 ms-1 fw-bold bd-highlight"> 1 </span>
                              var order_qty = laters_list[row][2]
                              const forth_span_f1st_dflex_span_tag = document.createElement("span")
                              forth_span_f1st_dflex_span_tag.className = "px-1 ms-1 fw-bold bd-highlight"
                              forth_span_f1st_dflex_span_tag.innerText = order_qty /// --------------------- #5 -----------
                              f1st_dflex_span_tag.appendChild(forth_span_f1st_dflex_span_tag)
                      //</span>

                      // <span> (Note: Only available on Sundays) </span>
                      var order_note = laters_list[row][6]
                      const note_span = document.createElement("span")
                      note_span.innerText = "(Note: " + order_note + ")"
                      card_body_span_tag.appendChild(note_span)

//----------------------------------------------------------------------------------------------------------------------------------

                      // <hr class="mt-1">
                              const s2nd_hr_tag = document.createElement("hr")
                              s2nd_hr_tag.className = "mb-1"
                              card_body_span_tag.appendChild(s2nd_hr_tag)

//----------------------------------------------------------------------------------------------------------------------------------

                    // <span class="d-flex justify-content-between">
                      const t3rd_dflex_span_tag = document.createElement("span")
                      t3rd_dflex_span_tag.className = "d-flex justify-content-between"
                      card_body_span_tag.appendChild(t3rd_dflex_span_tag)

                        // <div class="d-flex align-items-center form-check form-switch bd-highlight">
                         const f1st_div_tag = document.createElement("div")
                         f1st_div_tag.className = "d-flex align-items-center form-check form-switch bd-highlight"
                         t3rd_dflex_span_tag.appendChild(f1st_div_tag)

                              // <input class="form-check-input" type="checkbox">
                                  var order_invoice_toggle = "true" //laters_list[row][8]
                                  const f1st_div_input_tag = document.createElement("input")
                                  f1st_div_input_tag.className = "form-check-input"
                                  f1st_div_input_tag.setAttribute("type", "checkbox")
                                  var checkStatus = "checked"
                                  if(laters_list[row][8] == false){
                                      checkStatus = "unchecked"
                                  }
                                  f1st_div_input_tag.setAttribute(checkStatus, order_invoice_toggle)
                                  f1st_div_tag.appendChild(f1st_div_input_tag)

                              // <label class="form-check-label mx-2">Invoice sent </label>
                                const f1st_div_label_tag = document.createElement("label")
                                f1st_div_label_tag.className = "form-check-label mx-2"
                                f1st_div_label_tag.innerText = "Invoice Sent"
                                f1st_div_tag.appendChild(f1st_div_label_tag)

                        //</div>


                        // <div class="d-flex align-items-center form-check form-switch bd-highlight">
                         const s2nd_div_tag = document.createElement("div")
                         s2nd_div_tag.className = "d-flex align-items-center form-check form-switch bd-highlight"
                         t3rd_dflex_span_tag.appendChild(s2nd_div_tag)

                              // <input class="form-check-input mx-2" type="checkbox">
                                  const s2nd_div_input_tag = document.createElement("input")
                                  s2nd_div_input_tag.className = "form-check-input"
                                  s2nd_div_input_tag.setAttribute("type", "checkbox")
                                  s2nd_div_tag.appendChild(s2nd_div_input_tag)

                              // <label class="form-check-label">Solved </label>
                                const s2nd_div_label_tag = document.createElement("label")
                                s2nd_div_label_tag.className = "form-check-label mx-2"
                                s2nd_div_label_tag.innerText = "Solved"
                                s2nd_div_tag.appendChild(s2nd_div_label_tag)
                        //</div>






            // </span>
          // </li>
  }

function refresh_products(){

}

function load_all_tab_products(id_number, list_of_products, row){
  
   let pills_all_1st_child = document.getElementById("all_products_grid_list") // div tag
            
  //  div <div class="col"> 
      const product_list_col_main_div = document.createElement("div")
      product_list_col_main_div.className = "col mt-3"
      pills_all_1st_child.appendChild(product_list_col_main_div)

      //  div  <div class="card" onclick="order_basket(2, "Kutetsemba Femme", 164.99, "https://i.ibb.co/mTj0NXL/Kutetsemba-Femme.png")">
        // class="card"
        const product_list_col_div2 = document.createElement("div")
        product_list_col_div2.className = "card"

        // onclick="order_basket(2, "Kutetsemba Femme", 164.99, "https://i.ibb.co/mTj0NXL/Kutetsemba-Femme.png")
        var id_number = id_number+1
        var name_of_product = '"'+ list_of_products[row][0] + '"'
        var price_of_product = list_of_products[row][1]
        var image_of_product = '"'+ list_of_products[row][2] + '"'
        
        
        product_list_col_main_div.appendChild(product_list_col_div2)

      // <img class="card-img-top" alt="..." src="https://i.ibb.co/mTj0NXL/Kutetsemba-Femme.png" draggable="false">
          const product_list_img = document.createElement("img")
          product_list_img.className = "card-img-top"
          product_list_img.setAttribute("alt",  "...")
          product_list_img.setAttribute("onclick", "order_basket("+id_number+", "+name_of_product+", "+price_of_product+", "+image_of_product+")")
          product_image_url = list_of_products[row][2] /// --------------------- #1 -----------
          product_list_img.src = product_image_url
          product_list_img.draggable = false
          product_list_col_div2.appendChild(product_list_img)

      //   <div class="card-body">
          const product_list_col_div2_2 = document.createElement("div")
          product_list_col_div2_2.className = "card-body"
          //productDescription(name_of_product, price_of_product, image_of_product)
          product_list_col_div2_2.setAttribute("onclick", "productDescription("+name_of_product+", "+price_of_product+", "+image_of_product+")")
          product_list_col_div2.appendChild(product_list_col_div2_2)

        // <h6 class="card-title text-truncate pb-1 mb-1">Kutetsemba Femme</h6>
          const product_list_col_div2_2_h6 = document.createElement("h6")
          product_list_col_div2_2_h6.className = "card-title text-truncate pb-1 mb-1"
          product_name = list_of_products[row][0]  /// --------------------- #2 -----------
          product_list_col_div2_2_h6.innerText = product_name 
          product_list_col_div2_2.appendChild(product_list_col_div2_2_h6)

          // <span class="d-flex justify-content-between">
            const product_list_col_div2_2_span = document.createElement("span")
            product_list_col_div2_2_span.className = "d-flex justify-content-between"
            product_list_col_div2_2.appendChild(product_list_col_div2_2_span)


        // <p class="card-text fw-bold">R164.99</p>
          const product_list_col_div2_2_p = document.createElement("p")
          product_list_col_div2_2_p.className = "card-text fw-bold bd-highlight my-0"
          product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p.innerText = "R" + product_price 
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p)

          // <p class="badge bg-secondary my-0">5 </p>
          const product_list_col_div2_2_p_qty_left = document.createElement("p")
          product_list_col_div2_2_p_qty_left.className = "badge bg-secondary my-0"
          // product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p_qty_left.innerText = list_of_products[row][4] 
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p_qty_left)
}

function load_rock_tab_products(id_number, list_of_products, row){
        let pills_rock_1st_child = document.getElementById("rock_products_grid_list") // div tag
            
  //  div <div class="col"> 
      const product_list_col_main_div = document.createElement("div")
      product_list_col_main_div.className = "col mt-3"
      pills_rock_1st_child.appendChild(product_list_col_main_div)

      //  div  <div class="card">
        const product_list_col_div2 = document.createElement("div")
        product_list_col_div2.className = "card"

        var id_number = id_number+1
        var name_of_product = '"'+ list_of_products[row][0] + '"'
        var price_of_product = list_of_products[row][1]
        var image_of_product = '"'+ list_of_products[row][2] + '"'
        
        
        product_list_col_main_div.appendChild(product_list_col_div2)

      //  div <img draggable="false" src="https:...jpg" class="card-img-top">
          const product_list_img = document.createElement("img")
          product_list_img.className = "card-img-top"
          product_list_img.setAttribute("alt",  "...")
          product_list_img.setAttribute("onclick", "order_basket("+id_number+", "+name_of_product+", "+price_of_product+", "+image_of_product+")")
          product_image_url = list_of_products[row][2] /// --------------------- #1 -----------
          product_list_img.src = product_image_url
          product_list_img.draggable = false
          product_list_col_div2.appendChild(product_list_img)
      //  div <div class="card-body">
          const product_list_col_div2_2 = document.createElement("div")
          product_list_col_div2_2.className = "card-body"
          product_list_col_div2.appendChild(product_list_col_div2_2)

        // div  <h6 class="card-title">Pizza 7</h6>
          const product_list_col_div2_2_h6 = document.createElement("h6")
          product_list_col_div2_2_h6.className = "card-title text-truncate pb-1"
          product_name = list_of_products[row][0]  /// --------------------- #2 -----------
          product_list_col_div2_2_h6.innerText = product_name 
          product_list_col_div2_2.appendChild(product_list_col_div2_2_h6)

         // <span class="d-flex justify-content-between">
            const product_list_col_div2_2_span = document.createElement("span")
            product_list_col_div2_2_span.className = "d-flex justify-content-between"
            product_list_col_div2_2.appendChild(product_list_col_div2_2_span)


        // <p class="card-text fw-bold">R164.99</p>
          const product_list_col_div2_2_p = document.createElement("p")
          product_list_col_div2_2_p.className = "card-text fw-bold bd-highlight my-0"
          product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p.innerText = "R" + product_price 
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p)

          // <p class="badge bg-secondary my-0">5 </p>
          const product_list_col_div2_2_p_qty_left = document.createElement("p")
          product_list_col_div2_2_p_qty_left.className = "badge bg-secondary my-0"
          // product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p_qty_left.innerText = list_of_products[row][4]  
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p_qty_left)
}




function load_ubuntu_tab_products(id_number, list_of_products, row){
  let pills_ubuntu_1st_child = document.getElementById("ubuntu_products_grid_list") // div tag
            
  //  div <div class="col"> 
      const product_list_col_main_div = document.createElement("div")
      product_list_col_main_div.className = "col mt-3"
      pills_ubuntu_1st_child.appendChild(product_list_col_main_div)

      //  div  <div class="card">
        const product_list_col_div2 = document.createElement("div")
        product_list_col_div2.className = "card"

        var id_number = id_number+1
        var name_of_product = '"'+ list_of_products[row][0] + '"'
        var price_of_product = list_of_products[row][1]
        var image_of_product = '"'+ list_of_products[row][2] + '"'
        
        
        product_list_col_main_div.appendChild(product_list_col_div2)

      //  div <img draggable="false" src="https:...jpg" class="card-img-top">
          const product_list_img = document.createElement("img")
          product_list_img.className = "card-img-top"
          product_list_img.setAttribute("alt",  "...")
          product_list_img.setAttribute("onclick", "order_basket("+id_number+", "+name_of_product+", "+price_of_product+", "+image_of_product+")")
          product_image_url = list_of_products[row][2] /// --------------------- #1 -----------
          product_list_img.src = product_image_url
          product_list_img.draggable = false
          product_list_col_div2.appendChild(product_list_img)
      //  div <div class="card-body">
          const product_list_col_div2_2 = document.createElement("div")
          product_list_col_div2_2.className = "card-body"
          product_list_col_div2.appendChild(product_list_col_div2_2)

        // div  <h6 class="card-title">Pizza 7</h6>
          const product_list_col_div2_2_h6 = document.createElement("h6")
          product_list_col_div2_2_h6.className = "card-title text-truncate pb-1"
          product_name = list_of_products[row][0]  /// --------------------- #2 -----------
          product_list_col_div2_2_h6.innerText = product_name 
          product_list_col_div2_2.appendChild(product_list_col_div2_2_h6)

         // <span class="d-flex justify-content-between">
            const product_list_col_div2_2_span = document.createElement("span")
            product_list_col_div2_2_span.className = "d-flex justify-content-between"
            product_list_col_div2_2.appendChild(product_list_col_div2_2_span)


        // <p class="card-text fw-bold">R164.99</p>
          const product_list_col_div2_2_p = document.createElement("p")
          product_list_col_div2_2_p.className = "card-text fw-bold bd-highlight my-0"
          product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p.innerText = "R" + product_price 
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p)

          // <p class="badge bg-secondary my-0">5 </p>
          const product_list_col_div2_2_p_qty_left = document.createElement("p")
          product_list_col_div2_2_p_qty_left.className = "badge bg-secondary my-0"
          // product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p_qty_left.innerText = list_of_products[row][4]  
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p_qty_left)
}


function load_agrico_tab_products(id_number, list_of_products, row){
        let pills_agrico_1st_child = document.getElementById("agrico_products_grid_list") // div tag
            
  //  div <div class="col"> 
      const product_list_col_main_div = document.createElement("div")
      product_list_col_main_div.className = "col mt-3"
      pills_agrico_1st_child.appendChild(product_list_col_main_div)

      //  div  <div class="card">
        const product_list_col_div2 = document.createElement("div")
        product_list_col_div2.className = "card"

        var id_number = id_number+1
        var name_of_product = '"'+ list_of_products[row][0] + '"'
        var price_of_product = list_of_products[row][1]
        var image_of_product = '"'+ list_of_products[row][2] + '"'
        
        
        product_list_col_main_div.appendChild(product_list_col_div2)

      //  div <img draggable="false" src="https:...jpg" class="card-img-top">
          const product_list_img = document.createElement("img")
          product_list_img.className = "card-img-top"
          product_list_img.setAttribute("alt",  "...")
          product_list_img.setAttribute("onclick", "order_basket("+id_number+", "+name_of_product+", "+price_of_product+", "+image_of_product+")")
          product_image_url = list_of_products[row][2] /// --------------------- #1 -----------
          product_list_img.src = product_image_url
          product_list_img.draggable = false
          product_list_col_div2.appendChild(product_list_img)
      //  div <div class="card-body">
          const product_list_col_div2_2 = document.createElement("div")
          product_list_col_div2_2.className = "card-body"
          product_list_col_div2.appendChild(product_list_col_div2_2)

        // div  <h6 class="card-title">Pizza 7</h6>
          const product_list_col_div2_2_h6 = document.createElement("h6")
          product_list_col_div2_2_h6.className = "card-title text-truncate pb-1"
          product_name = list_of_products[row][0]  /// --------------------- #2 -----------
          product_list_col_div2_2_h6.innerText = product_name 
          product_list_col_div2_2.appendChild(product_list_col_div2_2_h6)
        
         // <span class="d-flex justify-content-between">
            const product_list_col_div2_2_span = document.createElement("span")
            product_list_col_div2_2_span.className = "d-flex justify-content-between"
            product_list_col_div2_2.appendChild(product_list_col_div2_2_span)


        // <p class="card-text fw-bold">R164.99</p>
          const product_list_col_div2_2_p = document.createElement("p")
          product_list_col_div2_2_p.className = "card-text fw-bold bd-highlight my-0"
          product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p.innerText = "R" + product_price 
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p)

          // <p class="badge bg-secondary my-0">5 </p>
          const product_list_col_div2_2_p_qty_left = document.createElement("p")
          product_list_col_div2_2_p_qty_left.className = "badge bg-secondary my-0"
          // product_price = list_of_products[row][1] /// --------------------- #3 -----------
          product_list_col_div2_2_p_qty_left.innerText = list_of_products[row][4]  
          product_list_col_div2_2_span.appendChild(product_list_col_div2_2_p_qty_left)
}


function order_basket(product_id, product_name, product_price, product_image_url){
  // console.log("order_basket() function ran")
          // console.log("-------------------------------------------")
          // console.log("product_id: " + product_id)
        //  console.log("order_item_qty: " + order_item_qty)
          // console.log("order_item_id_list: " + order_item_id_list)
          // console.log("order_name_list: " + order_name_list)
          // console.log("order_price_list: " + order_price_list)
          // console.log("order_image_list: " + order_image_list)
  if(all_not_disabled){
      // console.log("order_item_qty" + order_item_qty)
      if (order_name_list.indexOf(product_name) > -1){
          const item_index_num = order_name_list.indexOf(product_name)
          order_item_qty[item_index_num] = order_item_qty[item_index_num] + 1
          // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
          // console.log("order_item_qty: " + order_item_qty)
          // console.log("order_item_qty[item_index_num]: " + order_item_qty[item_index_num])
          // console.log("order_id_list:" + order_id_list)
          // console.log("order_id_list[item_index_num]: " + order_id_list[item_index_num])

          increment_decrement_item(order_id_list[item_index_num]+1, 1)

          // console.log("-------------------------------------------")
          // console.log("order_item_qty: " + order_item_qty)
          // console.log("order_item_id_list: " + order_item_id_list)
          // console.log("order_name_list: " + order_name_list)
          // console.log("order_price_list: " + order_price_list)
          // console.log("order_image_list: " + order_image_list)
          // console.log("-------------------------------------------")

          
      } else { 
          order_id_list.push(i)
          order_item_id_list.push(product_id)
          order_name_list.push(product_name)
          order_price_list.push(product_price)
          order_image_list.push(product_image_url)
          order_item_qty.push(1)
          
          // console.log("-------------------------------------------")
          // console.log("order_item_qty: " + order_item_qty)
          // console.log("order_item_id_list: " + order_item_id_list)
          // console.log("order_name_list: " + order_name_list)
          // console.log("order_price_list: " + order_price_list)
          // console.log("order_image_list: " + order_image_list)
          // console.log("-------------------------------------------")
      

        const order_list = document.getElementById("order_list") // ul tag

        // parent li tag
        const order_item_parent_list_tag = document.createElement("li")
        order_item_parent_list_tag.className = "mt-1 card"
        // span tag
        const order_item_span_tag = document.createElement("span") // Create span tag <span>
        order_item_span_tag.className = "d-flex justify-content-between align-items-center mt-2 mx-2"
          
        // IMAGE tag
        const order_item_image_tag = document.createElement("img") // create image tag <img>
        order_item_image_tag.src = product_image_url
        order_item_image_tag.className = "rounded border"
        order_item_image_tag.style = "width:60px" // style image classish 
        order_item_span_tag.appendChild(order_item_image_tag)
        
        // ITEM NAME span
        const order_item_name_span_tag = document.createElement("span") // Create ITEM NAME span tag <span3>
        const order_item_name = document.createTextNode(product_name) // Create product name text to add to li tag
        order_item_name_span_tag.className = "px-3 card-title"
        order_item_name_span_tag.appendChild(order_item_name)

        // Creating PRICE Span
        const order_item_price_span_tag = document.createElement("span") // Create PRICE span tag <span1>
        order_item_price_span_tag.className = "text-danger card-title" // span tag class
        const order_item_price = document.createTextNode(" R" + product_price) // Create product price text to span and add to li tag
        order_item_price_span_tag.appendChild(order_item_price) // Adding product price to span
        
        //  PIC + NAME + PRICE span
        const order_item_pic_name_price_span_tag = document.createElement("span") // Create span tag <span2>
        order_item_pic_name_price_span_tag.appendChild(order_item_image_tag)
        order_item_pic_name_price_span_tag.appendChild(order_item_name_span_tag)
        order_item_pic_name_price_span_tag.appendChild(order_item_price_span_tag) // Add spanned product price to li tag
        order_item_span_tag.appendChild(order_item_pic_name_price_span_tag) // [PIC + NAME + PRICE] to <li> tag
        
        // // DELETE BUTTON
        // const delete_button = document.createElement('button')
        // // const button_text = document.createTextNode('X ')
        // // delete_button.appendChild(button_text)
        // delete_button.className = "btn"


        // const delete_image = document.createElement("img") // create image tag <img>
        // delete_image.src = "https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-trash-can-1.png"
        // delete_image.className = "rounded border"
        // delete_image.style = "width:25px" // style image classish 
        // delete_button.appendChild(delete_image)


        

        // order_item_span_tag.appendChild(delete_button) // [button] to <li> tag
        // order_item_parent_list_tag.appendChild(order_item_span_tag) // Append PIC + NAME + PRICE span tag (child) to id="order_list" (main parent)
        
        // delete_button.setAttribute("onclick", "deleteItem("+i+", this)") // 'this' identifies the button itself
        

        // DELETE BUTTON
        const delete_button = document.createElement('button')
        const button_text = document.createTextNode('X')
        delete_button.appendChild(button_text)
        delete_button.className = "cart-product-btn btn btn-dark rounded-pill px-2 py-1"
        order_item_span_tag.appendChild(delete_button) // [button] to <li> tag
        order_item_parent_list_tag.appendChild(order_item_span_tag) // Append PIC + NAME + PRICE span tag (child) to id="order_list" (main parent)
        const myI = i+1
        delete_button.setAttribute("onclick", "deleteItem("+myI+", this)") // 'this' identifies the button itself
        
        
        //// + and - buttons
        const neg_pos_qty_span_tag = document.createElement("span")
        neg_pos_qty_span_tag.className = "d-flex justify-content-center align-items-center"

        // - button
        const negative_button = document.createElement('button')
        const negative_button_text = document.createTextNode('-')
        const negative_button_text_span_tag = document.createElement("span")
        negative_button_text_span_tag.className = "fw-bold"
        negative_button_text_span_tag.appendChild(negative_button_text)
        negative_button.className = "cart-btn cart-product-btn btn-sm btn btn-danger rounded-pill px-3 ms-5 my-1 "
        negative_button.appendChild(negative_button_text_span_tag)
        neg_pos_qty_span_tag.appendChild(negative_button)
        const myI2 = i+1
        negative_button.setAttribute("onclick", "increment_decrement_item("+myI2+", -1)")


        // Quantity
        const amount_item_span_tag = document.createElement("span")
        amount_item_span_tag.className = "cart-product-txt px-3 ms-1 fw-bold item"+myI2
        const amount_item_text = document.createTextNode("1")
        amount_item_span_tag.appendChild(amount_item_text) // add to item span
        neg_pos_qty_span_tag.appendChild(amount_item_span_tag)

        // + button
        const positive_button = document.createElement('button')
        const positive_button_text = document.createTextNode('+')
        const positive_button_text_span_tag = document.createElement("span")
        positive_button_text_span_tag.className = "fw-bold"
        positive_button_text_span_tag.appendChild(positive_button_text)
        positive_button.className = "cart-btn cart-product-btn btn-sm btn btn-success rounded-pill px-3 ms-1 my-2"
        positive_button.appendChild(positive_button_text)
        neg_pos_qty_span_tag.appendChild(positive_button)
        const myI3 = i+1
        positive_button.setAttribute("onclick", "increment_decrement_item("+myI3+", 1)")


        // Append everything to parent li tag
        // order_item_parent_list_tag.appendChild(order_item_span_tag) // Append PIC + NAME + PRICE span tag (child) to id="order_list" (main parent)
        order_item_parent_list_tag.appendChild(neg_pos_qty_span_tag) // Append + and - buttons span tag (child) to id="order_list" (main parent)
        order_list.appendChild(order_item_parent_list_tag) // Append li tag (child) with buttons to id="order_list" (main parent)

        i++

        document.getElementById("cart_item_number").innerText = parseInt(document.getElementById("total_items").innerText)+1
      }

      total_items()
      cost_items()
      // enable_checkout_button()
  }

  // console.log(">>>>>>>>>>>>>>>>>>>>>>>")
}
function order_basket_clear(){
  let order_list = document.getElementById("order_list") 
  document.getElementById("amount").value = 0

  order_item_id_list.length = 0
  order_list.innerText = ""
  order_name_list.length = 0
  order_price_list.length = 0
  order_id_list.length = 0
  order_image_list.length = 0
  order_item_qty.length = 0
  
  i = 0
  total_items()
  cost_items()
  // enable_checkout_button()

  document.getElementById("cart_item_number").innerText = 0
  // document.getElementById("amount_paid").innerText = 0
  document.getElementById("change_amount").innerText = 0
  document.getElementById("calculator_screen_amount2").innerText = document.getElementById("change_amount").innerText
  document.getElementById("calculator_screen_amount").innerText = 0
  go_to_all_tab()

}




function deleteItem(order_id, button){
  console.log("order_id_list before: " + order_id_list)
  console.log("order_id: " + order_id-1)
  const index_num = order_id_list.indexOf(order_id-1)
  console.log("Index num: " + index_num)

  order_item_id_list.splice(index_num,1)
  order_id_list.splice(index_num,1)
  order_name_list.splice(index_num,1)
  order_price_list.splice(index_num,1)
  order_image_list.splice(index_num,1)
  order_item_qty.splice(index_num,1)

  // order_list id in <ul> | button.parentElement is <li>
  
  total_items()
  cost_items()
  // enable_checkout_button()

  if (order_price_list.length === 0) {
    document.getElementById("amount").value = 0

    go_to_all_tab()
  }
  console.log("order_id_list after: " + order_id_list)
  console.log("order_list before: " + order_list)
  
  order_list.removeChild(button.parentElement.parentElement)
  console.log("order_list after: " + order_list)

}


function total_items(){
  // document.getElementById("total_items").innerText = order_name_list.length
  if (order_item_qty.length > 0){
    // console.log("TOTAL ITEMS IF")
    document.getElementById("total_items").innerText = order_item_qty.reduce((total, num) => { return total + num})
  } else {
    document.getElementById("total_items").innerText = "0"
  }
  document.getElementById("cart_item_number").innerText = parseInt(document.getElementById("total_items").innerText)
  // console.log("total_items function order_item_qty")
  
}


function cost_items(){

  var device_less_than_x_px = window.matchMedia("(max-width: 576px)").matches  // true or false

  if (order_price_list.length === 0){
      if (device_less_than_x_px){
        document.getElementById("total_cost").innerText = 0
        document.querySelector("#sale_areaId").style.display = "none"
        
      } else{
          document.getElementById("total_cost").innerText = 0
        }

 
  } else{

      document.querySelector("#sale_areaId").style.display = "block"
      // document.querySelector("#sale_areaId").style.background = "#efefef"

      const total_temp_array = []
      order_item_qty.map((qty, index) => {
        total_temp_array.push(qty * order_price_list[index])
        
      })

      document.getElementById("total_cost").innerText = parseFloat(getTotalValue(total_temp_array.reduce(summary).toFixed(2))).toFixed(2) // rounded to 2 decimals
      document.getElementById("amount").value = total_temp_array.reduce(summary).toFixed(2)
      document.getElementById("amount").innerText = "R" + total_temp_array.reduce(summary).toFixed(2)
      function summary(total, num){
        return total + num
      }

  }

  document.getElementById("cart_total").innerText = "R" + (document.getElementById("total_cost").innerText)
}

function getTotalValue(num) {
    if (Number.isInteger(num)) {
      return 0;
    }
      count = 0 
      decimal = 00
      total_value = 0
    const decimalStr = num.toString().split('.')[1];
    // console.log(decimalStr)
    if(Number(decimalStr)>0 && Number(decimalStr)<=49){
        decimal = 50
        
    } else if(Number(decimalStr)<=0){
        decimal = "00"
        
    } else if(Number(decimalStr)>=51 && Number(decimalStr)<=99){
        count +=1
        decimal = 00
    }
    
    const wholeStr = num.toString().split('.')[0];
    total_value = Number(wholeStr) + count + "." + decimal
    return total_value
  }


const calculator_screen_amount = document.getElementById("calculator_screen_amount")

function calculator_insert(number){ 
  if (calculator_screen_amount.value == '' && number == '.'){
    calculator_screen_amount.value = '0.'
  } 
  if (calculator_screen_amount.value == 0 && number == "0"){
    calculator_screen_amount.value = "0."
  
  } else if (calculator_screen_amount.value.includes(".")=== true && number == "."){
     calculator_screen_amount.value == calculator_screen_amount.value
    } else if (calculator_screen_amount.value == "0" && number>0){
      calculator_screen_amount.value = number
     } else {
        calculator_screen_amount.value += number
      }
  enable_confirm_paid_button()
}


function calculator_cancel(){
  document.getElementById("change_amount").innerText = 0
  document.getElementById("calculator_screen_amount2").value = document.getElementById("change_amount").innerText
  calculator_screen_amount.value = 0
  enable_confirm_paid_button()
}


function exact_amount(){
  calculator_screen_amount.value  = parseFloat(document.getElementById("exact_amount_value").innerText).toFixed(2)
  enable_confirm_paid_button()
}

function validate() {
    var fieldsToValidate = document.querySelectorAll("#userform input, #userform textarea") // for validating inputs and textareas

    Array.prototype.forEach.call(fieldsToValidate, function(eachElement){ // looping through each fieldToValidate
      if(eachElement.checkValidity()){ // if valid
        eachElement.classList.remove("is-invalid") // remove "is-invalid" from the class element
        // eachElement.classList.add("is-valid")
      } else {
        eachElement.classList.add("is-invalid") // otherwise add 'is-invalid' from the class element
      }
    });
      
    return Array.prototype.every.call(fieldsToValidate, function(eachElement){ // loop through the input fieldsToValidate. return true is none is invalid otherwise return false
      return eachElement.checkValidity(); 
    });
    

  }

  function productDescriptionClear(){
    document.getElementById("productDesBody").innerHTML = ""
  }

  function productDescription(name_of_product, price_of_product, image_url_of_product){

    document.getElementById("productDesImg").src = image_url_of_product
    document.getElementById("productDesName").innerText = name_of_product
    document.getElementById("productDesPrice").innerText = " - R" + price_of_product

    const body =  document.getElementById("productDesBody")

    const htmlElem = '<!-- Yoni Tea HEADING1 --> <div class="mb-2 mt-2"> <a class="btn btn-outline-success mb-2" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1"> What Is Yoni Tea? </a> <div class="collapse" id="collapseExample1"> <div class="card card-body"> This is our everyday tea for all women who want to take care of their reproductive health. With a blend of botanicals, specifically chosen to help support the reproductive system, our traditional yoni tea is made from a blend of herbs to cleanse and tone the uterus and can be used to relieve chronic fatigue and anaemia. <br><br> Yoni tea is formulated to help promote healthy ovarian function and balance your hormones. The herb and root ingredients are carefully blended and extremely effective in supporting female reproductive health. </div> </div> </div> <!-- Yoni Tea HEADING2 --> <div class="mb-2 mt-2"> <a class="btn btn-outline-success mb-2" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2"> Benefits Of Yoni Tea </a> <div class="collapse" id="collapseExample2"> <div class="card card-body"> ✔ Cleanse and tone your uterus <br> ✔ Relieve chronic fatigue <br> ✔ Enhance blood circulation <br> ✔ Promote a strong and healthy uterus <br> ✔ Clear the lymphatic system </div> </div> </div> <!-- Yoni Tea HEADING3 --> <div class="mb-2 mt-2"> <a class="btn btn-outline-success mb-2" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3"> Additional Benefits </a> <div class="collapse" id="collapseExample3"> <div class="card card-body"> • Gradually detoxify your body and experience vibrant energy and strength in your pelvic muscles and reduce the effects of PMS. <br> <br> • Cleansing the uterus after menstruation will help balance your hormones, relieve cramps and chronic fatigue—and help keep you feeling your best. It also makes an ideal gift for a loved one who\'s going through menopause.  <br> <br> • The ultimate female tonic for cleansing and stimulating the uterus and relieving symptoms of uterine prolapse. It will also refresh your whole body. <br> <br> • For best results, use in conjunction with our YONI STEAMING HERBS </div> </div> </div> <!-- Yoni Tea HEADING4 --> <div class="mb-2 mt-2"> <a class="btn btn-outline-success mb-2" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4"> Dosage And Instructions: </a> <div class="collapse" id="collapseExample4"> <div class="card card-body"> • Place one tablespoon of tea into a cup. <br> • Cover with boiling water (Important: water must be hot) <br> • Cover and steep for 5 - 10 minutes </div> </div> </div> <!-- Yoni Tea HEADING5 --> <div class="mb-2 mt-2"> <a class="btn btn-outline-success mb-2" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5"> Note! </a> <div class="collapse" id="collapseExample5"> <div class="card card-body"> • Do not boil the tea as it removes the required nutrients and herbs <br><br> • It\'s essential to let the tea steep for the recommended amount of time. <br><br> • The longer the tea steeps, the more bitter it may taste. Use honey instead of sugar to sweeten. <br><br> • If you are using more than one tea from the Yoni range, use them on alternating days. <br><br> • DO NOT DRINK while pregnant or breastfeeding. <br><br> Enjoy :) </div> </div> </div>'

    // let parser = new DOMParser()
    // let doc = parser.parseFromString(htmlElem, 'text/html');
    // body.appendChild(doc.body.firstChild)

    let frag2 = document.createRange().createContextualFragment(htmlElem)
    body.appendChild(frag2)

    var myModal = document.getElementById('productDescriptionModal');//select id of modal
    var myModalInit = new bootstrap.Modal(myModal);//inizialize it
    myModalInit.show();//show it 
  }

  function exact_amount_calculator(){
    document.getElementById("print_receipt_button").disabled = true;
    // console.log("exact_amount_calculator() executed :)")
    // console.log(order_item_qty)
    // console.log(order_item_qty.length > 0)
    if(order_item_qty.length > 0){
        var count = 0

      document.getElementById("exact_amount_value").innerText = parseFloat(document.getElementById("total_cost").innerText).toFixed(2)
      var fieldsToValidate = document.querySelectorAll("#statusDivElements input") // for validating inputs
        Array.prototype.forEach.call(fieldsToValidate, function(eachElement){

          count +=1
          // console.log(eachElement.checked) // looping through each fieldToValidate
          // Open Sales Modal
          if(eachElement.checked && count === 1){ 
            var myModal = document.getElementById('amount_calculator');//select id of modal
            var myModalInit = new bootstrap.Modal(myModal);//inizialize it
            myModalInit.show();//show it 

          // Open Orders Modal
          } else if (eachElement.checked && count === 2) {
            
            var myModal = document.getElementById('orderFirstModal');//select id of modal
            var myModalInit = new bootstrap.Modal(myModal);//inizialize it
            myModalInit.show();//show it 
            
          // Open Credit Modal
          } else if (eachElement.checked && count === 3) {
            var myModal = document.getElementById('existing_customer_exampleModal');//select id of modal
            var myModalInit = new bootstrap.Modal(myModal);//inizialize it
            myModalInit.show();//show it 
            
          }
        });
          
        return Array.prototype.every.call(fieldsToValidate, function(eachElement){ // loop through the input fieldsToValidate. return true is none is invalid otherwise return false
          return eachElement.checkValidity(); 
        });
    }


    // function exact_amount_calculator(){
    //   document.getElementById("exact_amount_value").innerText = document.getElementById("amount").value
  }
 

function denomination_button(bill_value){
  calculator_screen_amount.value = ((parseFloat(calculator_screen_amount.value) + parseFloat(bill_value)).toFixed(2)).toString()
  enable_confirm_paid_button()
}

// onclick="clearExistingCustDetaials('name', 'phone', 'note', 'checkbox')"
function clearExistingCustDetaials(name, phone, note, checkbox){

   document.getElementById(name).value = ""
   document.getElementById(phone).value = ""
  document.getElementById(note).value = ""
  document.getElementById(checkbox).checked = false;

  // var clearName = document.getElementById("")
  // var clearPhone  = document.getElementById("")
  // var clearNote = document.getElementById("")
  // var clearCheckbox = ()
}

function clearNewCustomerDetails(name, whatsappNumber, altNumber, note, checkBox){
    document.getElementById(name).value = ""
    document.getElementById(whatsappNumber).value = ""
    document.getElementById(altNumber).value = ""
    document.getElementById(note).value = ""
    document.getElementById(checkBox).checked = false
}


function pay_later_function(){
  // console.log('pay_later_function ran')
  var pay_later_state = document.getElementById("pay_later_toggle").checked
  if(pay_later_state === true){
    // console.log("pay_later_function is true")
    customer_pay_later = true;
  } else {
    customer_pay_later = false;
  }

  enable_confirm_paid_button()
}

var customer_pay_later = false;

function enable_confirm_paid_button(){
  // console.log("enable_confirm_paid_button function ran")
  document.getElementById("confirm_payed").disabled = true
  document.getElementById("next_customer_button").disabled = false;
  if (parseFloat(document.getElementById("amount").value) <= parseFloat(calculator_screen_amount.value) || customer_pay_later === true){
    // console.log("Inside if")
    var exactAmountValue = parseFloat(document.getElementById("total_cost").innerText)
    var screenAmount = document.getElementById("calculator_screen_amount").value

    if(customer_pay_later != true){
      document.getElementById("change_amount").innerText = parseFloat(screenAmount - exactAmountValue).toFixed(2)
      document.getElementById("calculator_screen_amount2").value = "-" + parseFloat(document.getElementById("change_amount").innerText).toFixed(2)
    }
    document.getElementById("confirm_payed").disabled = false
    document.getElementById("next_customer_button").disabled = false;
  } else{
    // console.log("Outside if statement")
  }
}

// function confirm_order_button(){
//   disable_all_ubuntu_rock_navbars()
//   disable_order_list_items_and_buttons()
// }


function confirm_paid_button(){

  disable_all_ubuntu_rock_navbars()
  disable_order_list_items_and_buttons()

  // creating 2D list array
  var full_date = new Date()
  var year = full_date.getFullYear()
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = full_date.getMonth()
  var date = full_date.getDate()
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var day = full_date.getDay()
  var hours = full_date.getHours()
  var minutes = full_date.getMinutes()
  if (minutes<10){
    minutes = "0"+minutes
  }
  var ap_pm = ""
  if (hours<12){
    ap_pm = " AM"
  } else{
    ap_pm = " PM"
  }
  // Mon 27-Dec-2021 (11:52 AM)
  var combined_date = days[day] + " " + date + "-" + months[month] + "-" + year + " ("+ hours + ":" + minutes + ap_pm +")"
  // console.log(combined_date)

  for (let col=0; col<order_name_list.length; col++){
    
    _2d_list_.push([
                      order_name_list[col], 
                      order_price_list[col], 
                      order_item_qty[col], 
                      order_image_list[col], 
                      combined_date
                    ])
  }

  var total_amount_paid = document.getElementById("calculator_screen_amount").value
  var customer_payment_comment = document.getElementById("customer_payment_comment").value


  var sale_change = parseFloat(document.getElementById("change_amount").innerText)

  var pay_later_toggle = document.getElementById("pay_later_toggle").checked
  var card_payment_toggle = document.getElementById("card_payment_toggle").checked
  var keep_the_change_toggle = document.getElementById("keep_the_change_toggle").checked
  var collect_change_later_toggle = document.getElementById("collect_change_later_toggle").checked

  google.script.run.set_product_list(
                                        _2d_list_, 
                                        sale_number, 
                                        total_amount_paid,
                                        sale_change,
                                        sale_customer_name, 
                                        sale_customer_whatsapp_number,
                                        sale_customer_alt_number,
                                        pay_later_toggle,
                                        keep_the_change_toggle,
                                        card_payment_toggle,
                                        collect_change_later_toggle,
                                        customer_payment_comment


                                        )
  document.getElementById("next_customer_button").disabled = false
  all_not_disabled = false;
  document.getElementById("print_receipt_button").disabled = false;
  
  document.getElementById("confirm_payed").disabled = true;

  reset_customer_details()

  
  

}

var sale_customer_name = ""
var sale_customer_whatsapp_number = ""
var sale_customer_alt_number = ""
var sale_customer_note = ""

function set_existing_customer_details(){
    sale_customer_name = document.getElementById("sale_existing_customer_name").value 
    sale_customer_whatsapp_number = document.getElementById("sale_existing_phone_number").value 
}

function set_new_customer_details(){
  sale_customer_name = document.getElementById("sale_new_customer_name").value 
  sale_customer_whatsapp_number = document.getElementById("sale_new_phone_number").value 
  sale_customer_alt_number = document.getElementById("sale_new_alt_phone_number").value 
  sale_customer_note = document.getElementById("sale_new_customer_note").value

  var new_customer_details = [sale_customer_name, sale_customer_whatsapp_number, sale_customer_alt_number, sale_customer_note]
  google.script.run.register_new_customer_details(new_customer_details);
}

function reset_customer_details(){
   document.getElementById("sale_existing_customer_name").value = ""
   document.getElementById("sale_existing_phone_number").value = ""

  document.getElementById("sale_new_customer_name").value = ""
  document.getElementById("sale_new_phone_number").value
  document.getElementById("sale_new_alt_phone_number").value  = ""

}


    function send_receipt_button(){
    var spaces = "                                                                 "
    var sub_total_spaces = "                                                   "
    var total_spaces = "                                                           "
    // var products = "product 2 - %0a  x2" + spaces + "R150.00 %0a"
    var receipt_products = []
   
    for (let i = 0; i<order_name_list.length; i++ ){
      receipt_products.push(order_name_list[i] + " - %0a x" + order_item_qty[i] + spaces + "R" + (order_item_qty[i]*order_price_list[i]) + " %0a")
    }
    // console.log(receipt_products)
    var new_receipt_products = receipt_products.join(" ")
    // console.log(new_receipt_products)
    var full_name = sale_customer_name
    var phone = sale_customer_whatsapp_number

  var full_date = new Date()
  var year = full_date.getFullYear()
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = full_date.getMonth()
  var date = full_date.getDate()
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var day = full_date.getDay()
  var hours = full_date.getHours()
  var minutes = full_date.getMinutes()
  if (minutes<10){
    minutes = "0"+minutes
  }
  var ap_pm = ""
  if (hours<12){
    ap_pm = " AM"
  } else{
    ap_pm = " PM"
  }
  // Mon 27-Dec-2021 (11:52 AM)
  // var combined_date = days[day] + " " + date + "-" + months[month] + "-" + year + " ("+ hours + ":" + minutes + ap_pm +")"
  var combined_date = days[day] + " " + date + "-" + months[month] + "-" + year

    if (full_name==="" && phone ===""){
      full_name = "Walkin Customer"
      phone = 0812755841
    } else if(phone ===""){
      phone = 0812755841
    }
    var dashes = "*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*"
    var total_amount = "R" + document.getElementById("amount").value
    var cashier_name = "Khanya"

    var topicLeftSpaces = "              " // 14 spaces
    var topicRightSpaces = "             " // 13 spaces

    var subTopicLeftSpaces = "       " // 7 spaces
    var subTopicRightSpaces = "      " // 6 spaces
    var companyName = "     *BLUEPRINT*"

    var text = "◇◇◇" + topicLeftSpaces + companyName + topicRightSpaces + "◇◇◇%0a◇◇◇" + subTopicLeftSpaces + "_We All Start Somewhere_" + subTopicRightSpaces + "◇◇◇  %0a%0a  _*HELLO.*_%0a _*THIS IS YOUR INVOICE.*_%0a%0a *Total Bill : " + total_amount +  "* %0a *To : " +  full_name + "* %0a *Cashier : " +  cashier_name + "* %0a *Date : " +combined_date+ "*%0a%0a" + dashes + "%0a" + new_receipt_products + "%0a Subtotal" + sub_total_spaces + total_amount + " %0a" + dashes + "%0a Total" + total_spaces + total_amount +" %0a" + dashes + "%0a%0a*Thank you for your support* 🙏🏾%0a%0a*You are the reason we do what we do.* *Hope you are happy with your purchase!* *We're looking forward to serve you again* 😊%0a%0a  *_Account Details_*%0a ▪︎ _Bank : Capitec_%0a ▪︎ _Account Number : 1452454785_%0a ▪︎ _Phone : 081 275 5841_%0a ▪︎ _Branch Code : 2002_ %0a%0a _*Enquiry*_ %0a • _Khanya : 081 275 5841_%0a • _Bobo : 081 275 5841_%0a"
    var new_text = text.replaceAll(" ", "%20")
    google.script.run.withSuccessHandler(setGooglePdfFile).getPDFFile()
    var link = "https://api.whatsapp.com/send?phone=27" + phone+ "&text=" + new_text 
    // console.log(link)
    return link
}
var myPdfFile;
 function setGooglePdfFile(pdfFile){
  myPdfFile = pdfFile;
}


function disable_order_list_items_and_buttons(){
  document.getElementById("clear_button").disabled = true
  document.getElementById("pay_button").disabled = true
  document.getElementById("order_order_button").disabled = true
  document.getElementById("sale_order_button").disabled = true
  document.getElementById("credit_order_button").disabled = true
  document.getElementById("burger_menu_button").disabled = true

  const all_buttons = document.getElementById("order_list").querySelectorAll("button")
  // console.log(all_buttons);

  for(let i = 0; i < all_buttons.length; i++ ){
    all_buttons[i].disabled = true
  }


}

function enable_order_list_items_and_buttons(){
  document.getElementById("clear_button").disabled = false
  document.getElementById("order_order_button").disabled = false
  document.getElementById("sale_order_button").disabled = false
  document.getElementById("credit_order_button").disabled = false
  document.getElementById("burger_menu_button").disabled = false

  const all_buttons = document.getElementById("order_list").querySelectorAll("button")
  // console.log(all_buttons);

  for(let i = 0; i < all_buttons.length; i++ ){
    all_buttons[i].disabled = false
  }
}


function disable_all_ubuntu_rock_navbars(){
  document.getElementById("pills-all-tab").disabled = true
  document.getElementById("pills-ubuntu-tab").disabled = true
  document.getElementById("pills-rock-tab").disabled = true
  document.getElementById("pills-agrico-tab").disabled = true
}


function enable_next_customer_and_print_buttons(){
  // document.getElementById("print_receipt_button").disabled = false
  document.getElementById("next_customer_button").disabled = false

}

function disable_next_customer_and_print_buttons(){
  // document.getElementById("print_receipt_button").disabled = false
  // document.getElementById("next_customer_button").disabled = true

}

function go_to_all_tab(){
  // console.log('go_to_all_tab ran')
  const firstTabEl = document.getElementById("pills-all-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();
  document.getElementById("search_input_div").style.display = "block"
}

function go_to_rock_tab(){
  const firstTabEl = document.getElementById("pills-rock-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();
  document.getElementById("search_input_div").style.display = "block"

}

function go_to_ubuntu_tab(){
  const firstTabEl = document.getElementById("pills-ubuntu-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();
  document.getElementById("search_input_div").style.display = "block"


}

function go_to_agrico_tab(){
  const firstTabEl = document.getElementById("pills-agrico-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();
  document.getElementById("search_input_div").style.display = "block"

}

function go_to_orders_tab(){
  // display_orders()F
  document.getElementById("orders_ul").innerHTML = ""
  google.script.run.withSuccessHandler(load_orders).get_orders_list()

  const firstTabEl = document.getElementById("pills-orders-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();

}

function go_to_laters_tab(){
  // console.log("go_to_laters_tab() function ran")
  document.getElementById("laters_ul").innerHTML = ""
  // google.script.run.withSuccessHandler(load_laters).get_laters_list()

  const firstTabEl = document.getElementById("pills-laters")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  backToTop()
  document.getElementById("offcanvas_button_id").click();

}


function go_to_checkout_tab(){
  const firstTabEl = document.getElementById("pills-checkout-tab")
  const firstTab = new bootstrap.Tab(firstTabEl)
  firstTab.show()
  // get_list_of_customer_names()
  // document.getElementById("change_amount").placeholder = "R"
  // document.getElementById("amount_paid").placeholder = "R"
  backToTop()
}


function send_receipt_button2(){
    var spaces = "                                                                    "
    var sub_total_spaces = "                                                      "
    var total_spaces = "                                                              "
    // var products = "product 2 - %0a  x2" + spaces + "R150.00 %0a"
    var receipt_products = []
   
    for (let i = 0; i<order_name_list.length; i++ ){
      receipt_products.push(order_name_list[i] + " - %0a x" + order_item_qty[i] + spaces + "R" + (order_item_qty[i]*order_price_list[i]) + " %0a")
    }
    // console.log(receipt_products)
    var new_receipt_products = receipt_products.join(" ")
    // console.log(new_receipt_products)
    var full_name = document.getElementById("customer_name").value
    var phone = document.getElementById("phone_number").value

    if (full_name==="" && phone ===""){
      full_name = "Walkin Customer"
      phone = 0812755841
    } else if(phone ===""){
      phone = 0812755841
    }
    var dashes = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    var total_amount = "R" + document.getElementById("amount").value
    var text = "Dear " +  full_name + " 😊%0a%0aTotal Bill Amount is " + total_amount + " %0a P Date: 31 Dec 2021 %0a" + dashes + "%0a" + new_receipt_products + "%0a Subtotal" + sub_total_spaces + total_amount + " %0a%0a" + dashes + "%0a Total" + total_spaces + total_amount +" %0a" + dashes + "%0a%0a Thank you :)%0a`"
    var new_text = text.replaceAll(" ", "%20")
    var link = "https://api.whatsapp.com/send?phone=27" + phone+ "&text=" + new_text
    // console.log(link)
    return link
}


var customer_full_names_list = [];
// sale_existing_customer_name_autofill_box
// const sale_existing_customer_name_element = document.querySelector("#sale_existing_customer_name_autofill_box")
// const input_sale_existing_customer_name_element = document.querySelector("#sale_existing_customer_name")

// function loadCustomerFullNames(customer_full_names_list, sale_existing_customer_name_element){
//   if(customer_full_names_list){
//     sale_existing_customer_name_element.innerHTML = "";

//     let innerElement = "";
//     customer_full_names_list.forEach((item) => {
//       innerElement += `
//       <li> ${item} </li>`;
//       });

//       sale_existing_customer_name_element.innerHTML = innerElement;
//   }
// }

// function filterCustomerFullNames(customer_full_names_list, seachName){
//   return customer_full_names_list.filter((x) => x.toLowerCase().includes(seachName.toLowerCase()));
// }

// input_sale_existing_customer_name_element.addEventListener("input", function(){
//   const fiterData = filterCustomerFullNames(customer_full_names_list, input_sale_existing_customer_name_element.value)
//   loadCustomerFullNames(fiterData, sale_existing_customer_name_element)
// })





function get_list_of_customer_names(){
  google.script.run.withSuccessHandler(set_list_of_customer_names).get_customer_full_names()
  // console.log("Customer Full Names: ")
  // console.log(customer_full_names_list)
  // console.log("get_list_of_customer_names function ran")
}

var customer_id;
var customer_phone_id;

function set_list_of_customer_names(customer_full_names){
  // console.log("set_list_of_customer_names function ran")
    customer_full_names_list = customer_full_names
    // console.log("customer id: " + customer_id)
    autocomplete(document.getElementById(customer_id), customer_full_names_list, customer_id);
    // loadCustomerFullNames(customer_full_names_list, sale_existing_customer_name_element)

}

function setCustomerId(idName, idPhoneNumber){
  
  customer_id = idName
  customer_phone_id = idPhoneNumber
  get_list_of_customer_names()
}

function makeAnOrder(order_1_customer_name, order_1_phone_number, order_1_customer_note, invoice_sent_check_box) {
  google.script.run.withSuccessHandler(load_orders).get_orders_list()

  document.getElementById("order_print_receipt_button").disabled = false
  disable_all_ubuntu_rock_navbars()
  disable_order_list_items_and_buttons()
  document.getElementById("next_customer_button").disabled = false
  all_not_disabled = false;

  var customer_order_details = []
  var order_customer_name = document.getElementById(order_1_customer_name).value
  var order_phone_number = document.getElementById(order_1_phone_number).value
  var order_note = document.getElementById(order_1_customer_note).value
  var order_check_box = document.getElementById(invoice_sent_check_box).value
  var resolved = false;

  var full_date = new Date()
  var year = full_date.getFullYear()
  //pull the last two digits of the year
  year = year.toString().substr(-2);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = full_date.getMonth()
  var date = full_date.getDate()
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day = full_date.getDay()
  var hours = full_date.getHours()
  var minutes = full_date.getMinutes()
  if (minutes<10){
    minutes = "0"+minutes
  }
  var ap_pm = ""
  if (hours<12){
    ap_pm = " AM"
  } else{
    ap_pm = " PM"
  }
  // Mon 27-Dec-2021 (11:52 AM)
  var combined_date = days[day] + " " + date + " " + months[month] + "  '" + year
  // console.log(combined_date)


    // console.log(order_customer_name + " with phone number " + order_phone_number + " Note: '" + order_note + "' Box checked: " + order_check_box)
    for (let col=0; col<order_name_list.length; col++){
    
    // _2d_list_.push([order_name_list[col], order_price_list[col], order_item_qty[col], order_image_list[col], order_note[col], combined_date])
    _2d_list_.push([order_name_list[col], order_price_list[col], order_item_qty[col], order_image_list[col]])


   
    
  }

  customer_order_details.push(order_customer_name, order_phone_number, order_note, combined_date)
  // console.log(customer_order_details)
    google.script.run.set_customer_order(_2d_list_, customer_order_details)
    // new_sale()
}

function clearOrderDetails(order_1_customer_name, order_1_phone_number, order_1_customer_note, order_customer_check_box){
   document.getElementById(order_1_customer_name).value = ""
    document.getElementById(order_1_phone_number).value = ""
    document.getElementById(order_1_customer_note).value = ""
    document.getElementById(order_existing_phone_number).value = ""
    
    document.getElementById("next_customer_button").disabled = false;
    document.getElementById("order_print_receipt_button").disabled = true;

    // New Customer Details
  document.getElementById("order_new_customer_name").value = ""
  document.getElementById("order_new_phone_number").value = ""
  document.getElementById("order_new_alt_phone_number").value = ""
  document.getElementById("order_new_customer_note").value = ""
  document.getElementById("order_new_customer_check_box").checked = false;

  // Sale Existing Customer Details
  document.getElementById("order_existing_customer_name").value = ""
  document.getElementById("order_existing_phone_number").value = ""
  document.getElementById("order_existing_customer_note").value = ""
  document.getElementById("existing_customer_check_box").checked = false;
}

function send_order_receipt_button(order_1_customer_name, order_1_customer_phoneNumber){
    var spaces = "                                                                   "
    var sub_total_spaces = "                                                      "
    var total_spaces = "                                                              "
    // var products = "product 2 - %0a  x2" + spaces + "R150.00 %0a"
    var receipt_products = []
   
    for (let i = 0; i<order_name_list.length; i++ ){
      receipt_products.push(order_name_list[i] + " - %0a x" + order_item_qty[i] + spaces + "R" + (order_item_qty[i]*order_price_list[i]) + " %0a")
    }
    // console.log(receipt_products)
    var new_receipt_products = receipt_products.join(" ")
    // console.log(new_receipt_products)
    var full_name = document.getElementById(order_1_customer_name).value
    var phone = document.getElementById(order_1_customer_phoneNumber).value

    if (full_name==="" && phone ===""){
      full_name = "Walkin Customer"
      phone = 0812755841
    } else if(phone ===""){
      phone = 0812755841
    }
    var dashes = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    var total_amount = "R" + document.getElementById("amount").value
    var text = "   "+ "  Hi " + full_name +"! %0a%0a THANKS FOR YOUR ORDER! %0a%0a This is your confirmation. We'll be in touch soon to let you know when your order is ready. Below is your order info:  %0a%0a Order Date: 31 Dec 2021 %0a" + dashes + "%0a" + new_receipt_products + "%0a Subtotal" + sub_total_spaces + total_amount + " %0a%0a" + dashes + "%0a Total" + total_spaces + total_amount +" %0a" + dashes + "%0a%0a Thank you 😊%0a%0a For enquires:%0a 081 275 5841 | 063 859 2090"
    var new_text = text.replaceAll(" ", "%20")
    var link = "https://api.whatsapp.com/send?phone=27" + phone+ "&text=" + new_text
    // console.log(link)
    return link
}


function autofill_disabled_customer_details(name, phoneNumber){
    // document.getElementById("order_existing_phone_number").value = phone_number
  
    document.getElementById("order_1_customer_name").value = document.getElementById(name).value
    document.getElementById("order_1_phone_number").value = document.getElementById(phoneNumber).value
    // console.log("Autotfill Baba!")
    create_order_new_customer();
    
}



// let searchable = ['Khanya Meyiswa', 'Abongile Tyutu', 'Jabulile Dhlamini', 'Nomsa Radebe', 'Wandile Zulu', '', 'Nomasonto Lutshetu', 'Mlungisi Bala', 'Nonhlanhla Mhlungu', 'Nomhle Gayiya', 'Tat Lutshetu ', 'Jabulile Dhlamini', 'Rebecca Makhathini', 'RCG Soweto', 'Nthabiseng Ikaneng', 'Zodwa Sithole', 'Lucky Noko', 'Sendi Rangwati']



// const searchInput = document.getElementById('search');
// const searchWrapper = document.querySelector('.wrapper');
// const resultsWrapper = document.querySelector('.results');

//   searchInput.addEventListener('keyup', () => {
//     let results = [];
//     let input = searchInput.value;
//     if (input.length) {
//       results = searchable.filter((item) => {
//         return item.toLowerCase().includes(input.toLowerCase());
//       });
//     }
//     renderResults(results);
//   });

//   function renderResults(results) {
//     if (!results.length) {
//       return searchWrapper.classList.remove('show');
//     }

//     const content = results
//       .map((item) => {
//         return `<li onclick='select(this)'>${item}</li>`;
//       })
//       .join('');

//     searchWrapper.classList.add('show');
//     resultsWrapper.innerHTML = `<ul>${content}</ul>`;
//   }


//   function select(choice){
//     document.getElementById("search").value = choice.textContent
//     searchWrapper.classList.remove('show');
//     renderResults([])

//   }




function autocomplete(inp, arr, customerId) {
  // console.log("autocomplete function ran")
  // console.log(inp)
  // console.log(arr)
  // console.log(customerId)
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/ //NB:SOLVED!!!!!!!!!!!!!!!!!!!
          if (arr[i].toUpperCase().includes(val.toUpperCase())) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            // if(val !==""){
            //   let regExp =  new RegExp(val, "gi")
            //   b.innerHTML = (b.textContent).replace(regExp, "<strong>$&</strong>")
            // }

            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      var searched_name = document.getElementById(customerId).value
      if (searched_name.length>0){
        google.script.run.withSuccessHandler(populate_customer_details).get_customer_details_to_populate(searched_name)
      }
  });
}


  function populate_customer_details(phone_number){
    // console.log("populate_customer_details function ran")
    document.getElementById(customer_phone_id).value = phone_number
  }





function new_sale(){
  google.script.run.withSuccessHandler(load_products).get_product_list()

  // console.log("NEW SALE function!!!")
  // customer_details()
  
  _2d_list_ = []
  all_not_disabled = true;
  sale_number = sale_number+1
  document.getElementById("order_number").innerText = "0"+(sale_number)

  // document.getElementById("pay_button").disabled = false
  document.getElementById("pills-rock-tab").disabled = false
  document.getElementById("pills-all-tab").disabled = false
  document.getElementById("pills-ubuntu-tab").disabled = false
  document.getElementById("pills-agrico-tab").disabled = false
  document.getElementById("pay_button").disabled = false

  
  document.getElementById("calculator_screen_amount").value = 0
  // document.getElementById("amount_paid").value = "R"
  document.getElementById("change_amount").value = 0
  document.getElementById("calculator_screen_amount2").innerText = document.getElementById("change_amount").value
  // document.getElementById("customer_name").value = ""

  go_to_main_menu_tab()
  enable_order_list_items_and_buttons()
  order_basket_clear()
  disable_next_customer_and_print_buttons()

  // google.script.run.set_customer_details(customer_details_list)
  reset_caltulator_fields()

  
}

function reset_caltulator_fields(){
      // customer_details_list = []
  document.getElementById("cart_item_number").innerText = 0
  // document.getElementById("amount_paid").innerText = 0
  document.getElementById("change_amount").innerText = 0
  document.getElementById("calculator_screen_amount2").value = document.getElementById("change_amount").innerText
  document.getElementById("calculator_screen_amount").value = 0
  // document.getElementById("next_customer_button").disabled = true;
  document.getElementById("print_receipt_button").disabled = true;

  document.getElementById("pay_later_toggle").checked = false;
  document.getElementById("card_payment_toggle").checked = false;
  document.getElementById("keep_the_change_toggle").checked = false;
  document.getElementById("collect_change_later_toggle").checked = false;

  // Sale New Customer Details
  document.getElementById("customer_payment_comment").value = ""
  document.getElementById("sale_new_customer_name").value = ""
  document.getElementById("sale_new_phone_number").value = ""
  document.getElementById("sale_new_alt_phone_number").value = ""
  document.getElementById("sale_new_customer_note").value = ""
  document.getElementById("new_customer_check_box").checked = false;

  // Sale Existing Customer Details
  document.getElementById("sale_existing_customer_name").value = ""
  document.getElementById("sale_existing_phone_number").value = ""
  document.getElementById("sale_existing_customer_note").value = ""
  document.getElementById("sale_existing_customer_check_box").checked = false;
}


function customer_details(){
  var customer_name = document.getElementById("customer_name").value
  var total_amount = document.getElementById("amount").value
  // var amount_paid = document.getElementById("amount_paid").value
  var change_amount = document.getElementById("change_amount").value
  customer_details_list.push(sale_number, customer_name, total_amount, amount_paid, change_amount)
}

function go_to_main_menu_tab(){
  
  const mainMenuTabEl = document.getElementById("pills-all-tab")
  const mainMenuTab = new bootstrap.Tab(mainMenuTabEl)

  mainMenuTab.show()
  
}



function increment_decrement_item(order_id, val){
  const itemSpan = document.querySelector(".item"+order_id)
  // console.log("Item Span: " + itemSpan)
  // console.log("Inner Text: " + itemSpan.innerText)
  itemSpan.innerText = parseInt(itemSpan.innerText) + val

  // console.log("Order Id: " + order_id)
  // console.log("Order Id List: " + order_id_list)

  const index_num = order_id_list.indexOf(order_id-1)
  // console.log("Index Number: " + index_num)
  order_item_qty[index_num] = parseInt(itemSpan.innerText)
  // console.log("order_item_qty[index_num]" + order_item_qty[index_num])

  total_items()
  cost_items()

  if (itemSpan.innerText == 0){
    order_item_id_list.splice(index_num,1)
    order_id_list.splice(index_num,1)
    order_name_list.splice(index_num,1)
    order_price_list.splice(index_num,1)
    order_image_list.splice(index_num,1)
    order_item_qty.splice(index_num,1)

    total_items()
    cost_items()
    // enable_checkout_button()

    if (order_price_list.length === 0){
      document.getElementById("amount").value = 0

    }

    // order_list id in <ul> | button.parentElement is <li>
    order_list.removeChild(itemSpan.parentElement.parentElement)

  }
}


    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);


// function hide_offcanvas(){
//     var myOffcanvas = document.getElementById('my_offcanvas')
//     var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
//     myOffcanvas.hide()
//     bsOffcanvas.hide()
// }



function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// document.getElementById('new_customer_save_button').onclick = function() {
//     var radio = document.querySelector('input[type=checkbox][name=register_me]:checked');
//     radio.checked = false;
//       }

function uncheck(){
  const register_me_checkbox = document.getElementById("new_customer_check_box")
  if (register_me_checkbox.checked == true){
    const checkbox = document.querySelector('input[type=checkbox][name=register_me]:checked');
    checkbox.checked = false;
    // console.log("Checkbox unchecked!")
  }
}







function create_order_new_customer(){
  // var myModal = new bootstrap.Modal(document.getElementById('new_customer_exampleModal'))
    
  // if (validate_create_new_customer()){
    if (true){
      // const new_customer_save_button = document.getElementById("new_customer_save_button")
      // // new_customer_save_button.setAttribute("data-bs-dismiss", "modal")
      // new_customer_save_button.disabled = false;
      // console.log("INSIDE AN IF STATEMENT")
  
    const order_new_customer_full_name = document.getElementById("order_new_customer_name").value
    const order_new_customer_whatsapp_number = document.getElementById("order_new_phone_number").value
    const order_new_customer_email = document.getElementById("order_new_customer_email").value
    const order_new_customer_birthday = document.getElementById("order_new_customer_birthday").value
    const order_new_customer_street_address = document.getElementById("order_new_customer_street_address").value
    const order_new_customer_place_address = document.getElementById("order_new_customer_place_address").value
    const order_new_customer_postal_code = document.getElementById("order_new_customer_postal_code").value
    const order_new_customer_note = document.getElementById("order_new_customer_note").value

    const order_new_customer_details = [order_new_customer_full_name, order_new_customer_whatsapp_number, order_new_customer_email, order_new_customer_birthday, order_new_customer_street_address, order_new_customer_place_address, order_new_customer_postal_code, order_new_customer_note]
    // console.log("create_new_customer function triggered")
    google.script.run.register_new_customer_details(order_new_customer_details)

     } else{
            var myAlert = document.getElementById('error_notification');//select id of toast
            var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
            bsAlert.show();//show it

     }

    document.getElementById("order_new_customer_name").value = ""
    document.getElementById("order_new_phone_number").value = ""
    document.getElementById("order_new_customer_email").value = ""
    document.getElementById("order_new_customer_birthday").value = ""
    document.getElementById("order_new_customer_street_address").value = ""
    document.getElementById("order_new_customer_place_address").value = ""
    document.getElementById("order_new_customer_postal_code").value = ""
    document.getElementById("order_new_customer_note").value = ""


}

function clear_new_customer_section(){
    uncheck() // Clear / Uncheck check box

    // Clearing inputs
    // console.log("clear_new_customer_section triggered")
    document.getElementById("new_customer_save_button").disabled = true;
    document.getElementById("new_customer_full_name").value = ""
    document.getElementById("new_customer_whatsapp_number").value = ""
    document.getElementById("new_customer_email").value = ""
    document.getElementById("new_customer_birthday").value = ""
    document.getElementById("new_customer_street_address").value = ""
    document.getElementById("new_customer_postal_code").value = ""
    document.getElementById("new_customer_note").value = ""
    document.getElementById("new_customer_place_address").value = ""


    // Clearing is-valid shadow boxes
    var fields_to_validate = document.querySelectorAll("#create_new_customer_form_container input")
  // console.log("validate_create_new_customer function triggured")
  Array.prototype.forEach.call(fields_to_validate, function(each_element){
        each_element.classList.remove("is-valid")
  })

    // Clearing "Please fill all required fields 😊" divs
    var valid_div_values = document.getElementsByClassName("invalid-feedback")
    // console.log(valid_div_values)
     Array.prototype.forEach.call(valid_div_values, function(each_element){
      each_element.innerHTML = ""
      // const init = each_element.value
  })


}


function validate_create_new_customer(){

    var fields_to_validate = document.querySelectorAll("#create_new_customer_form_container input")

    // Removing-Adding validity on elements      
    Array.prototype.forEach.call(fields_to_validate, function(each_element){
      if(each_element.checkValidity()){
          each_element.classList.remove("is-invalid")
          if (each_element.value != ""){each_element.classList.add("is-valid")}
          
        } else {
            each_element.classList.add("is-invalid")

          }
    })

    // Check validity of elements in the create new customer form
    return Array.prototype.every.call(fields_to_validate, function(each_element){
        return each_element.checkValidity();
    })
}

// b = document.createElement("DIV");
// /*make the matching letters bold:*/
// b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
// b.innerHTML += arr[i].substr(val.length);

// function test(){
//   console.log("TEST FUMCTION SRS")
//   let str = "Khanya"


// const getIndexOfCharacter = function(str, char){
//     let tmpArray = [...str];
//     char = char.toLowerCase()

//     return tmpArray.reduce((results, elem, idx) => elem.toLowerCase() === char ? [...results, idx] : results, [])
// }
// let letterr = "a"
// let results = getIndexOfCharacter(str,letterr) //  [2, 5]
// let word = ""
// for (let i = 0; i < results.length; i++) {
//     word += results.splice(,results[i])
//   }
// // let results2 = results.splice()
// console.log(results)
// }


function login_to_pos(){
  // test()
  // console.log("login_to_pos function ran")
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  google.script.run.withSuccessHandler(function(output) 
  {
    if(output == 'TRUE')
    { // console.log("output TRUE")
      document.getElementById("center_tag").style.display = "none";
      document.getElementById("page1_id1").className = "page1_class1-off";
      document.getElementById("page2_id1").className = "page2_id1";

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";    
    }
    else if(output == 'FALSE')
     { //console.log("output FALSE")
      // document.getElementById("errorMessage").innerHTML = "Invalid data";
      var myAlert = document.getElementById('login_error_notification');//select id of toast
      var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
      bsAlert.show();//show it     
    }    
  }).checkLogin("Khanya", "12345km"); // checkLogin(username, password);
}

function Back()
{  
order_basket_clear()
document.getElementById("offcanvas_button_id").click();
document.getElementById("center_tag").style.display = "block";
document.getElementById("page1_id1").className = "page1_class1";
document.getElementById("page2_id1").className = "page2_class1";     
}





// </script>





<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">

</script>
