// Script pour insérer des commandes de test dans Firestore
const firebaseConfig = {
    apiKey: "AIzaSyBOu3SluP6IWLU8FmVI7-WdPOwokpFHDRE",
    authDomain: "wie-act.firebaseapp.com",
    projectId: "wie-act",
    storageBucket: "wie-act.firebasestorage.app",
    messagingSenderId: "99125947461",
    appId: "1:99125947461:web:96167805327e6a2a78472c",
    measurementId: "G-Q54B9E9KDV"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Remplacez ceci par l'ID de l'utilisateur client que vous testez
const clientId = "TEST_CLIENT_ID"; // Obtenez l'UID d'un utilisateur client via Firebase Auth

// Données de test pour les commandes
const testOrders = [
    {
        clientId: clientId,
        products: [
            {
                productId: "apple1",
                name: "Pommes Gala Bio",
                quantity: 2,
                unit: "kg",
                price: 2.50
            },
            {
                productId: "onion1",
                name: "Oignons Rouges Bio",
                quantity: 1,
                unit: "kg",
                price: 1.20
            }
        ],
        total: 2 * 2.50 + 1 * 1.20, // 6.20 TND
        status: "pending",
        date: new Date("2025-10-02T10:00:00Z").toISOString(),
        seller: "Ferme Ben Slimene",
        phone: "+216 98 123 456",
        location: "Nabeul, Tunisie"
    },
    {
        clientId: clientId,
        products: [
            {
                productId: "apple1",
                name: "Pommes Gala Bio",
                quantity: 5,
                unit: "kg",
                price: 2.50
            }
        ],
        total: 5 * 2.50, // 12.50 TND
        status: "transit",
        date: new Date("2025-10-01T15:30:00Z").toISOString(),
        seller: "Ferme Ben Slimene",
        phone: "+216 98 123 456",
        location: "Nabeul, Tunisie"
    },
    {
        clientId: clientId,
        products: [
            {
                productId: "onion1",
                name: "Oignons Rouges Bio",
                quantity: 3,
                unit: "kg",
                price: 1.20
            }
        ],
        total: 3 * 1.20, // 3.60 TND
        status: "delivered",
        date: new Date("2025-09-30T09:00:00Z").toISOString(),
        seller: "Ferme El Jazira",
        phone: "+216 97 654 321",
        location: "Sfax, Tunisie"
    }
];

// Fonction pour insérer les commandes
async function insertTestOrders() {
    try {
        for (const order of testOrders) {
            await db.collection('orders').add(order);
            console.log(`Commande ajoutée pour ${order.products.map(p => p.name).join(', ')}`);
        }
        console.log('Toutes les commandes de test ont été insérées avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des commandes de test :', error);
    }
}

// Exécuter le script
insertTestOrders();