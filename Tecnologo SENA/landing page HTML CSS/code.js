const titleData =[
  {
    title: "SAIF",
    subtitle: "Software de Administración de Inventario Farmacéutico",
    button: "¡Click para conocerlo!"
  }
]
const menuData = [
  {
    title: "Usuarios",
    icon: "<img src='src/profile.png' alt='profile_image'>",
    submenu: [
      {
        title: "Administrador",
        description:
          "Se conforma por la persona administradora de la herramienta informática, responsable de configurar y supervisar el funcionamiento del software; además está encargada de brindar soporte tecnológico y capacitación en el uso de la herramienta. Se requiere un profesional en sistemas o software con al menos 3 años de experiencia.",
      },
      {
        title: "Supervisor",
        description:
          "Se refiere a las personas responsables de la gestión del proceso, encargados de llevar un adecuado control en las diferentes áreas (Bodegas/almacén, sedes de dispensación, transporte proveedores) se requiere un profesional en el área de la administración de empresas con habilidades de liderazgo, además de destrezas en el área de tecnología particularmente en el manejo de software de inventarios con autoridad para la toma de decisiones.",
      },
      {
        title: "Básico",
        description:
          "Pertenecen a este grupo los usuarios de las sedes, bodega/almacén, servicio de transporte y demás personal operativo encargados de realizar registros en la plataforma referente a actividades inherentes a la organización, pueden ser técnicos en el área de la salud u otra rama pertinente a su rol, con conocimientos básicos en sistemas.",
      },
    ],
  },
  {
    title: "Módulos",
    icon: "<img src='src/module.png' alt='module_image'>",
    submenu: [
      {
        title: "Administrador",
        description:
          "Desde este módulo se realiza la configuración del sistema, modificación de módulos, creación de usuarios y asignación de perfiles, rutas y montos de aprobación. ",
      },
      {
        title: "Base de datos",
        description:
          "Permite creación, modificación o eliminación de ítems. Además de la generación de códigos internos y categorización de productos según características técnicas propias del producto para su adecuada clasificación y almacenamiento. El sistema asocia toda la información a su código de barras para mayor facilidad.",
      },
      {
        title: "Inventarios",
        description:
          "Permite registro de solicitudes de requisición, pedidos al almacén y transferencias de productos entre sedes. Emisión de órdenes de compra para reabastecimiento automáticas, ordenes de despacho y envío de mercancía. Consulta de existencias en tiempo real. Alertas por vencimiento o baja rotación",
      },
      {
        title: "Proveedores",
        description:
          "Permite creación, modificación o eliminación de proveedores, incluyendo información clave para gestión en la comunicación de la cadena de suministros. Además, se pueden generar las requisiciones, solicitudes de cotizaciones, órdenes de compra y seguimiento de estas. ",
      },
      {
        title: "Reportes",
        description:
          "Permite generar dashboard estratégicos y operativos configurables para el monitoreo y análisis del desempeño los indicadores clave de rendimiento, como rotación, despachos, Kardex, compras y el tiempo de entrega con los que puedes identificar problemas y oportunidades de mejora. ",
      },
    ],
  },
];




function renderMenu(menuData, container) {
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  menuData.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = item.icon + item.title;
    li.classList.add("has_menu");
    li.dataset.index = index;

    li.addEventListener("click", (event) => {
      event.stopPropagation();
      const submenuPanel = document.getElementById("submenu_panel");
      const descriptionPanel = document.getElementById("description_panel");

      const allMenuItems = document.querySelectorAll(".has_menu");
      allMenuItems.forEach((e) => {
        e.classList.remove("selected");
      });

      submenuPanel.style.backgroundColor = "#0444cf";
      li.classList.add("selected");

      // Limpiar descripción previa
      descriptionPanel.innerHTML = "";

      const existing = document.getElementById("submenu_deployed");
      if (existing) {
        submenuPanel.style.backgroundColor = "";
        existing.remove();
        
          if (parseInt(existing.dataset.index) === index){
            allMenuItems.forEach((e) => {
            e.classList.remove("selected");
          });
            return
          };
      }

      const subUl = document.createElement("ul");
      subUl.id = "submenu_deployed";
      li.id = "is_selected";
      subUl.dataset.index = index;
      subUl.classList.add("submenu", "fade-in");
      submenuPanel.style.backgroundColor = "#0444cf";
      item.submenu.forEach((subItem) => {
        const subLi = document.createElement("li");
        subLi.textContent = subItem.title;

        subLi.addEventListener("click", (e) => {
          e.stopPropagation();
          const allSubmenuItems = subUl.querySelectorAll("li");
          allSubmenuItems.forEach(element=>element.classList.remove("sublist_selected"))
          subLi.classList.add("sublist_selected")
          // Mostrar descripción
          descriptionPanel.innerHTML = `
            <div class="fade-in">
                <h2>${subItem.title}</h2>
                <p>${subItem.description}</p>
            </div>
                `;
        });

        subUl.appendChild(subLi);
      });

      submenuPanel.appendChild(subUl);
    });

    ul.appendChild(li);
  });

  container.appendChild(ul);
}


function renderIntro(data_main_menu,menu_container){
  menu_container.style.display = "none";
  const h1 = document.getElementById('title');
  const p = document.getElementById('paragraph');
  const button = document.getElementById('button');

  data_main_menu.forEach((item)=>{
    h1.textContent = item.title;
    p.textContent = item.subtitle;
    button.textContent = item.button;
  }
)
  button.addEventListener('click',(e)=>{
    e.stopPropagation();
    const mainMenuContainer = document.getElementById("main_menu");
    document.getElementById("Intro").style.display = "none";
    menu_container.style.display = "flex";  
    renderMenu(menuData, mainMenuContainer)
  })
}
    const menu_container = document.getElementById("menu_container");
renderIntro(titleData,menu_container);