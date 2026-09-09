export const menuData = {
  categories: [
    {
      key: 'hamburguesas',
      label: 'Hamburguesas',
      route: '/hamburguesas',
      title: 'Hamburguesas',
      eyebrow: 'Gastrobar',
      bannerImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80',
      description: 'Jugosas hamburguesas hechas con pan artesanal, queso derretido y aderezo casero.',
      products: [
        { name: 'Bistro Smash', description: 'Carne 160g, queso cheddar, cebolla roja y salsa smoky.', price: 18500, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80' },
        { name: 'La Cabaña', description: 'Carne doble, tocineta, queso gouda y cebollas caramelizadas.', price: 21500, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
        { name: 'Oven Melt', description: 'Doble queso, salsa BBQ, rúgula y pan de ajonjolí.', price: 20500, tag: 'Picante', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IACvqY1clWOTwa4srAeuSH17LzKKf7apT8pW5nEfLw&s=10' },
        { name: 'Green Stack', description: 'Carne con queso crisps, aguacate, tomate y aderezo verde.', price: 19500, tag: 'Vegetariano', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMIoD35xlWyICvJVKfIw2Vqzy1It3QsV2q9_uMhC_TSb1pIo20O6_kwz1&s=10' },
        {name: 'BBQ Crunch', description: 'Carne a la parrilla, queso cheddar, tocineta crujiente y salsa BBQ.',price: 22500, tag: 'Popular', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'},
{name: 'Chicken Deluxe', description: 'Pechuga de pollo crujiente, queso, lechuga, tomate y salsa especial.', price: 21000, tag: 'Pollo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKa-AJZSTrY51v00h5db_JrEmnBhlkYJKIePsxfrblpA&s=10'}
      ],
      chef: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV30E2UoTd_1CfoECDCRV4K6M6NT9rvR4cj8tdemvBpQ&s=10',
        label: 'Recomendación del chef',
        title: 'La Smash de la casa',
        copy: 'Nuestra hamburguesa roja de la semana: doble carne, queso fundido y salsa de la casa.',
        action: 'La favorita del grill'
      }
    },
    {
      key: 'perros',
      label: 'Perros',
      route: '/perros',
      title: 'Perros calientes',
      eyebrow: 'Street dog',
      bannerImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80',
      description: 'Perros calientes clásicos con pan suave, salsas, queso y toppings latinos.',
      products: [
        { name: 'Dog Tradicional', description: 'Salami, cebolla criolla, papa cocida y salsa de ajo.', price: 15000, tag: 'Más pedido', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQui-HsOhAk2B86Ln5xSJKHpQ8sW-kJOAmk-oDsJI9Myw&s=10' },
        { name: 'Dog Ranchero', description: 'Queso, salsa ranchera, jalapeño y maíz tostado.', price: 16500, tag: 'Picante', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqkc4_9TkH6flz7JKgbR2woWV5O5td5jKmPyLcAmTFXlMNF_OrnElIp1t&s=10' },
        { name: 'Dog Mixto', description: 'Carne desmechada, salsa barbecue, queso mozzarella y cebollín.', price: 17500, tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-E58YZYUGBYmzAAqHrCbgA-TCaRVlMP4Fq1A2LVF3FGGNV74QWCsWGlL&s=10' },
        { name: 'Dog Verde', description: 'Pavo, guacamole, pico de gallo y mayonesa herbácea.', price: 16800, tag: 'Vegetariano', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5x_CkvNzGuk83jJDGF8MQJ_sRzbfbsWo5Pct8LC_6w&s=10' },
        {name: 'Mexican Dog',description: 'Salchicha, guacamole, jalapeños, queso, tomate, cebolla y salsa especial.',price: 18500,tag: 'Picante', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75TPyJBTULIfCXRvVlVZVdujKxp2x2rtCdBFFFYclJw&s=10'},
        {name: 'Bacon Crunch Dog',description: 'Salchicha, tocineta crocante, queso cheddar, cebolla caramelizada y salsa BBQ.',price: 18500,tag: 'Popular',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOkYwwqhAJU_ZbIxB7jQunBQEVlR4SwfB1AH6sXGfmw&s=10'}
      ],
      chef: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFfMSwRgE7JhDdvWX2FvxFVGbrHJd5bSoOp2DHLQAoQqr2-2uFNX0fYY&s=10',
        label: 'Recomendación del chef',
        title: 'Dog de la calle',
        copy: 'Panes recién tostados, salami casero y la salsa más cremosa del barrio.',
        action: 'La calle nos conoce'
      }
    },
    {
      key: 'pizzas',
      label: 'Pizzas',
      route: '/pizzas',
      title: 'Pizzas',
      eyebrow: 'Masa madre',
      bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIIfxAhBgEzN53YyGVh95leUBpIX7WTbHVczWaO_qDkXPK8eNwaEBd2s&s=10',
      description: 'Masa fina, borde de queso y ingredientes frescos para cada corte.',
      products: [
        { name: 'Margarita Alba', description: 'Tomate, mozzarella, albahaca fresca y aceite de oliva.', price: 24500, tag: 'Clásica', image: 'https://slice-menu-assets-prod.imgix.net/112811/1780314079_848efb3e80?fit=crop&w=480&h=480' },
        { name: 'Fuego Chorizo', description: 'Chorizo, queso, cebollín, jalapeños y salsa roja.', price: 26500, tag: 'Picante', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80' },
        { name: 'Horno Verde', description: 'Champiñones, espinaca, queso mozzarella y salsa bechamel.', price: 25500, tag: 'Vegetariano', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uij2y8WUKnfjc2_shnDCxqxMEfOadm7A1w_BKgSuNg&s=10' },
        { name: 'Santo Jamón', description: 'Jamón ahumado, queso, tomate, aceitunas y oregano.', price: 26000, tag: 'Más pedido', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiON82MN4JhOzvITQjqEY1B6gsry98v_08n0pTykwI4g&s=10' },
       {name: 'Pizza Pepperoni',description: 'Salsa de tomate, queso mozzarella y abundante pepperoni.',price: 24000,tag: 'Clásica',image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e'},
{name: 'Pizza Hawaiana',description: 'Salsa de tomate, queso mozzarella, jamón y trozos de piña.',price: 25000,tag: 'Popular',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7OiHvuufyOJd_fFWZ_3IrWHT_dI_eYZyagcV6WZxiQ&s=10'}
      ],
      chef: {
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80',
        label: 'Recomendación del chef',
        title: 'Margarita de horno de leña',
        copy: 'Tomate slow-cooked, albahaca fresca y queso mozzarella con borde dorado.',
        action: 'La piedra del fuego'
      }
    },
    {
      key: 'bebidas',
      label: 'Bebidas',
      route: '/bebidas',
      title: 'Bebidas',
      eyebrow: 'Refrescos & café',
      bannerImage: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1800&q=80',
      description: 'Bebidas frías, calientes y artesanales para acompañar cada bocado.',
      products: [
        { name: 'Chicha Wacapu', description: 'Bebida de maíz con panela y limón fresco.', price: 8500, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80' },
        { name: 'Limonada de Menta', description: 'Limón, menta, panela y hielo natural.', price: 7000, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80' },
        { name: 'Café de Origen', description: 'Café tostado con notas de cacao y caramelo.', price: 9000, tag: 'Clásica', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
        { name: 'Té Rosado', description: 'Infusión de rosa y frutos rojos con hierba fresca.', price: 8000, tag: 'Light', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80' },
        { name: 'Jugo de Guanábana', description: 'Guanábana cremosa, leche y un toque de panela.', price: 8000, tag: 'Cremoso', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSVtX6sT4LaGkZ3XXN85YXzVPkVYmGNG9DhK5MzuOyQ&s=10' },
        { name: 'Agua de Jamaica', description: 'Infusión de flor de Jamaica, limón y hielo natural.', price: 7000, tag: 'Refrescante', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiQhdU0NmwKVx_GnsuyV9xJCH71Nzxvnakd486PoRVg&s' }  
],
      chef: {
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
        label: 'Recomendación del chef',
        title: 'Limonada del patio',
        copy: 'Limonada fresca de la casa con menta, panela y un toque de sal marina.',
        action: 'La receta del verano'
      }
    },
    {
      key: 'postres',
      label: 'Postres',
      route: '/postres',
      title: 'Postres',
      eyebrow: 'Cocina dulce',
      bannerImage: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1800&q=80',
      description: 'Postres caseros con chocolate, leche, fruta y caramelo tostado.',
      products: [
        { name: 'Panna Cotta', description: 'Cuajada suave con frutos rojos y miel de panela.', price: 12000, tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhxKqN1L0ppjvNYyQ7c1YtRWH6Oek3vz3e7ycaLaSuQ&s=10' },
        { name: 'Mousse de Trufa', description: 'Chocolate oscuro, crema y cacao en polvo.', price: 13500, tag: 'Más pedido', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk5giqJcFsImukjA5Knhkqwjq1eN6a_p2GaPkIJv6DQ&s=10' },
        { name: 'Delicia de Arequipe', description: 'Pan de yuca, arequipe y coco tostado.', price: 11000, tag: 'Clásica', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80' },
        { name: 'Helado Cheddar', description: 'Helado de queso, miel y nuez tostada.', price: 12500, tag: 'Light', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWFhtP_7QXEWXKyMXj-j6cFWdmZsafjxsuqcL-qnxEQ&s=10' },
        { name: 'Helado de Brownie', description: 'Helado cremoso de vainilla con trozos de brownie y chocolate.', price: 9000, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80' },
        { name: 'Helado Tropical', description: 'Helado de mango con maracuyá, frutas frescas y salsa tropical.', price: 9500, tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc62t3Zmk8_aI7-k0Kgo0Zw-Xq7ou1SlxpqUcY1fNRbg&s=10' }
      ],
      chef: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk5giqJcFsImukjA5Knhkqwjq1eN6a_p2GaPkIJv6DQ&s=10',
        label: 'Recomendación del chef',
        title: 'Mousse trufa',
        copy: 'Chocolate oscuro de 70%, crema suave y cacao fresco para un final intenso.',
        action: 'La dulzura del fuego'
      }
    },
    {
      key: 'promociones',
      label: 'Promociones',
      route: '/promociones',
      title: 'Promociones',
      eyebrow: 'Combo del día',
      bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZlslN1c156NTGn-QwgQKuzaxvIME6vir5sf74LH9EA&s=10',
      description: 'Combos pensados para compartir, pedir y disfrutar con la familia.',
      products: [
        { name: 'Combo Familiar', description: '2 hamburguesas, papas y 2 gaseosas de 500ml.', price: 38500, tag: 'Más pedido', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3ac3bmDWvhrJlwfqXwlrbZM9l7ezIEufzX3_VoCA4Q&s=10' },
        { name: 'Pizza + Bebida', description: 'Pizza Margarita pequeña y limonada de la casa.', price: 22500, tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfkojq7RAHKI6zWP3P5hBu7sGmvs-37DD1qxWo9UI7g&s=10' },
        { name: 'Domingos para dos', description: '2 perros, papas clásicas y postre para compartir.', price: 29500, tag: 'Combo', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80' },
        { name: 'Hora del sabor', description: 'Combo especial de 4 productos con salsa y bebida.', price: 27000, tag: 'Picante', image: 'https://back.vinapp.co//store/1000x500188714-2021-10-07-16-44-05.jpg' },
    { name: 'Fiesta Familiar', description: ' 2 Pizzas ,Postre de preferencia  2 bebidas.', price: 45000, tag: 'Popular', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ycOfE0PcJUqVBCa2dOSHhU664qMd1Ttwg2wFHE-DOWyZley-axvNTnS1&s=10' },
{ name: 'Dúo Crujiente', description: '1 Hamburguesa + Perro con geseosa.', price: 22000, tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZAN5WZJXVDZrXXHrsaOUV4I9igeUZoIFOwtMKOpXUQ6AkEmBprJJAdtR&s=10' }  ],
     
chef: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ENqqkTHTv-lsXksor8ZJQaZtzzRUHMZzEntsmDkm5Q&s=10',
        label: 'Recomendación del chef',
        title: 'Combo Callejero',
        copy: 'La selección de la semana: burger, postre, bebida y papas clásicas.',
        action: 'El combo que se pide primero'
      }
    }
  ],
  about: {
    history: 'Gastrobar nació como una pequeña parrilla vecinal en el centro de la ciudad. Hoy, reunimos la tradición de la cocina rápida con la calidez de una mesa familiar, ingredientes frescos y recetas sorprendentes.',
    address: 'Cra. 14 #26-28, Barrio San José, Medellín',
    hours: 'Lunes a Domingo: 11:30 AM - 10:30 PM',
    phone: '+57 300 456 7890',
    whatsapp: '+57 300 456 7890',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    team: [
      { name: 'Sofía Ortiz', role: 'Chef', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxLGp0WOTNJWvq3_DwPDLEzums7lVoESwcprbqf_p7LMEVVzE5b1q66M&s=10' },
      { name: 'Mateo Rojas', role: 'Cajero', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NEuKXsVq0GaOcu7imQ2mvQJf1jno4uveG2srXj22mA&s=10' },
      { name: 'Camilo Pérez', role: 'Domiciliario', image: 'https://enriko.com.co/storage/2020/02/delivery-man-giving-take-away-food-DBXUQTG-copy.jpg' }
    ]
  }
}
