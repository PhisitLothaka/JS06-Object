const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

  const newFor={}

  for(let key in notebook){
    newFor[key] = notebook[key];
  }
  const  newObj = Object.assign({},notebook);

  console.log(notebook.brand);
  console.log(newFor.brand);
  console.log(newObj.brand);