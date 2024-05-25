// Variable to hold NFTs
let nftCollection = [];

// Function to mint NFTs
function mintNFT(name, eyeColor, shirtType, bling) {
    let newNFT = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(newNFT);
}

// Function to list NFT details
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Eye Color: " + nft.eyeColor);
        console.log("Shirt Type: " + nft.shirtType);
        console.log("Bling: " + nft.bling);
        console.log("--------------------");
    });
}

// Function to get total supply of NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Minting NFTs
mintNFT("Cool Dude", "Brown", "T-shirt", "Gold chain");
mintNFT("Fancy Lady", "Blue", "Dress", "Diamond earrings");
mintNFT("Tech Enthusiast", "Green", "Hoodie", "Smartwatch");

// Printing NFT details
listNFTs();

// Printing total supply
console.log("Total NFTs minted: " + getTotalSupply());
