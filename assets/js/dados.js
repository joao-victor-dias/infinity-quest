const dados = [
    {
        titulo: "Neil Armstrong",
        descricao: "Primeiro homem a pisar na Lua durante a missão Apollo 11.",
        link: "https://pt.wikipedia.org/wiki/Neil_Armstrong",
        tags: "astronauta apollo11 lua"
    },
    {
        titulo: "Buzz Aldrin",
        descricao: "Segundo homem a pisar na Lua durante a missão Apollo 11.",
        link: "https://pt.wikipedia.org/wiki/Buzz_Aldrin",
        tags: "astronauta apollo11 lua"
    },
    {
        titulo: "Yuri Gagarin",
        descricao: "Primeiro ser humano no espaço em 1961.",
        link: "https://pt.wikipedia.org/wiki/Yuri_Gagarin",
        tags: "astronauta espaço soviético"
    },
    {
        titulo: "Curiosity",
        descricao: "Rover da NASA que explora Marte desde 2012.",
        link: "https://pt.wikipedia.org/wiki/Curiosity_(rover)",
        tags: "missão marte rover nasa"
    },
    {
        titulo: "Saturno V",
        descricao: "Foguete que lançou as missões Apollo à Lua.",
        link: "https://pt.wikipedia.org/wiki/Saturno_V",
        tags: "foguete apollo lua nasa"
    },
    {
        titulo: "Valentina Tereshkova",
        descricao: "Primeira mulher a viajar para o espaço.",
        link: "https://pt.wikipedia.org/wiki/Valentina_Tereshkova",
        tags: "astronauta espaço soviética mulher"
    },
    {
        titulo: "Apollo 11",
        descricao: "Primeira missão a levar humanos à Lua.",
        link: "https://pt.wikipedia.org/wiki/Apollo_11",
        tags: "missão lua apollo nasa"
    },
    {
        titulo: "Hubble",
        descricao: "Telescópio espacial que revolucionou a astronomia.",
        link: "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_Hubble",
        tags: "telescópio espaço astronomia"
    },
    {
        titulo: "Vostok 1",
        descricao: "Foguete que lançou Yuri Gagarin ao espaço.",
        link: "https://pt.wikipedia.org/wiki/Vostok_1",
        tags: "foguete espaço soviético"
    },
    {
        titulo: "Sally Ride",
        descricao: "Primeira mulher americana no espaço em 1983.",
        link: "https://pt.wikipedia.org/wiki/Sally_Ride",
        tags: "astronauta espaço americana mulher"
    },
    {
        titulo: "SpaceX Falcon 9",
        descricao: "Foguete reutilizável desenvolvido pela SpaceX.",
        link: "https://pt.wikipedia.org/wiki/Falcon_9",
        tags: "foguete spacex falcon"
    },
    {
        titulo: "Perseverance",
        descricao: "Rover da NASA que chegou a Marte em 2021 para procurar sinais de vida.",
        link: "https://pt.wikipedia.org/wiki/Perseverance_(rover)",
        tags: "missão marte rover nasa"
    },
    {
        titulo: "John Glenn",
        descricao: "Primeiro americano a orbitar a Terra em 1962.",
        link: "https://pt.wikipedia.org/wiki/John_Glenn",
        tags: "astronauta terra órbita americana"
    },
    {
        titulo: "Edwin Hubble",
        descricao: "Astrônomo que descobriu a expansão do universo.",
        link: "https://pt.wikipedia.org/wiki/Edwin_Hubble",
        tags: "astrônomo espaço universo"
    },
    {
        titulo: "Apollo 13",
        descricao: "Missão lunar abortada devido a problemas técnicos, famosa pelo resgate dos astronautas.",
        link: "https://pt.wikipedia.org/wiki/Apollo_13",
        tags: "missão lua apollo resgate"
    },
    {
        titulo: "Sputnik 1",
        descricao: "Primeiro satélite artificial a orbitar a Terra, lançado pela União Soviética.",
        link: "https://pt.wikipedia.org/wiki/Sputnik_1",
        tags: "satélite espaço soviético"
    },
    {
        titulo: "Laika",
        descricao: "Primeira cadela a orbitar a Terra em 1957, a bordo do Sputnik 2.",
        link: "https://pt.wikipedia.org/wiki/Laika",
        tags: "cadela satélite espaço soviético"
    },
    {
        titulo: "Voyager 1",
        descricao: "Sonda lançada em 1977 que se tornou o objeto mais distante da Terra.",
        link: "https://pt.wikipedia.org/wiki/Voyager_1",
        tags: "sonda espaço nasa"
    },
    {
        titulo: "James Webb",
        descricao: "Telescópio espacial lançado em 2021 para substituir o Hubble.",
        link: "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_James_Webb",
        tags: "telescópio espaço astronomia"
    },
    {
        titulo: "Mercury-Atlas 6",
        descricao: "Missão de John Glenn que orbitou a Terra.",
        link: "https://pt.wikipedia.org/wiki/Mercury-Atlas_6",
        tags: "missão terra órbita mercury"
    },
    {
        titulo: "Apollo 17",
        descricao: "Última missão tripulada à Lua, em 1972.",
        link: "https://pt.wikipedia.org/wiki/Apollo_17",
        tags: "missão lua apollo17 nasa"
    },
    {
        titulo: "Viking 1",
        descricao: "Primeira sonda a pousar com sucesso em Marte em 1976.",
        link: "https://pt.wikipedia.org/wiki/Viking_1",
        tags: "sonda marte nasa"
    },
    {
        titulo: "Elon Musk",
        descricao: "Fundador da SpaceX e visionário da exploração espacial comercial.",
        link: "https://pt.wikipedia.org/wiki/Elon_Musk",
        tags: "empresário spacex tecnologia"
    },
    {
        titulo: "Luna 2",
        descricao: "Primeira sonda a atingir a Lua, lançada pela União Soviética.",
        link: "https://pt.wikipedia.org/wiki/Luna_2",
        tags: "sonda lua soviética"
    },
    {
        titulo: "Gemini 4",
        descricao: "Primeira caminhada espacial americana realizada por Ed White.",
        link: "https://pt.wikipedia.org/wiki/Gemini_4",
        tags: "missão caminhada espacial americana"
    },
    {
        titulo: "Challenger",
        descricao: "Ônibus espacial que sofreu uma tragédia em 1986, resultando na morte de sete astronautas.",
        link: "https://pt.wikipedia.org/wiki/Challenger",
        tags: "ônibus espacial tragédia nasa"
    },
    {
        titulo: "Columbia",
        descricao: "Primeiro ônibus espacial lançado pela NASA, em 1981.",
        link: "https://pt.wikipedia.org/wiki/Columbia",
        tags: "ônibus espacial nasa"
    },
    {
        titulo: "International Space Station (ISS)",
        descricao: "Estação espacial internacional habitada desde 2000.",
        link: "https://pt.wikipedia.org/wiki/International_Space_Station",
        tags: "estação espacial iss nasa internacional"
    },
    {
        titulo: "Chris Hadfield",
        descricao: "Astronauta canadense famoso por seus vídeos musicais gravados no espaço.",
        link: "https://pt.wikipedia.org/wiki/Chris_Hadfield",
        tags: "astronauta canadense música espaço"
    },
    {
        titulo: "Galileo Galilei",
        descricao: "Cientista pioneiro no uso do telescópio para observar o espaço.",
        link: "https://pt.wikipedia.org/wiki/Galileo_Galilei",
        tags: "astrônomo telescópio ciência espaço"
    },
    {
        titulo: "Cassini",
        descricao: "Missão que explorou Saturno e suas luas de 2004 a 2017.",
        link: "https://pt.wikipedia.org/wiki/Cassini_(miss%C3%A3o)",
        tags: "missão saturno exploração nasa"
    },
    {
        titulo: "New Horizons",
        descricao: "Missão que visitou Plutão em 2015.",
        link: "https://pt.wikipedia.org/wiki/New_Horizons",
        tags: "missão plutão nasa"
    },
    {
        titulo: "Roscosmos",
        descricao: "Agência espacial da Rússia.",
        link: "https://pt.wikipedia.org/wiki/Roscosmos",
        tags: "agência espacial rússia"
    },
    {
        titulo: "Blue Origin",
        descricao: "Empresa de exploração espacial fundada por Jeff Bezos.",
        link: "https://pt.wikipedia.org/wiki/Blue_Origin",
        tags: "empresa exploração espacial bezos"
    },
    {
        titulo: "Alan Shepard",
        descricao: "Primeiro americano no espaço.",
        link: "https://pt.wikipedia.org/wiki/Alan_Shepard",
        tags: "astronauta americano espaço"
    },
    {
        titulo: "Juno",
        descricao: "Missão da NASA que está estudando Júpiter.",
        link: "https://pt.wikipedia.org/wiki/Juno_(sonda)",
        tags: "missão júpiter nasa"
    },
    {
        titulo: "Mars Pathfinder",
        descricao: "Missão que enviou o primeiro rover para Marte em 1997.",
        link: "https://pt.wikipedia.org/wiki/Mars_Pathfinder",
        tags: "missão marte rover nasa"
    },
    {
        titulo: "SpaceShipOne",
        descricao: "Primeira nave espacial privada a alcançar o espaço.",
        link: "https://pt.wikipedia.org/wiki/SpaceShipOne",
        tags: "nave privada espaço"
    },
    {
        titulo: "Helios",
        descricao: "Missão que estudou o Sol, chegando mais perto dele do que qualquer outra nave.",
        link: "https://pt.wikipedia.org/wiki/Helios",
        tags: "missão sol estudo nasa"
    },
    {
        titulo: "Rosetta",
        descricao: "Missão da ESA que pousou em um cometa em 2014.",
        link: "https://pt.wikipedia.org/wiki/Rosetta_(miss%C3%A3o)",
        tags: "missão cometa pouso esa"
    },
    {
        titulo: "Soyuz",
        descricao: "Foguete russo que tem sido utilizado para lançar astronautas à ISS.",
        link: "https://pt.wikipedia.org/wiki/Soyuz_(foguete)",
        tags: "foguete russo iss"
    },
    {
        titulo: "Dragon",
        descricao: "Cápsula reutilizável da SpaceX para transporte de cargas e astronautas.",
        link: "https://pt.wikipedia.org/wiki/SpaceX_Dragon",
        tags: "cápsula spacex cargas astronautas"
    },
    {
        titulo: "Europa Clipper",
        descricao: "Futura missão da NASA para explorar a lua Europa de Júpiter.",
        link: "https://pt.wikipedia.org/wiki/Europa_Clipper",
        tags: "missão júpiter europa nasa"
    },
    {
        titulo: "Gene Cernan",
        descricao: "Último homem a caminhar na Lua em 1972.",
        link: "https://pt.wikipedia.org/wiki/Gene_Cernan",
        tags: "astronauta lua apollo17"
    },
    {
        titulo: "Tiangong",
        descricao: "Estação espacial chinesa em operação desde 2021.",
        link: "https://pt.wikipedia.org/wiki/Tiangong",
        tags: "estação espacial chinesa"
    },
    {
        titulo: "ExoMars",
        descricao: "Missão da ESA e Roscosmos para procurar vida em Marte.",
        link: "https://pt.wikipedia.org/wiki/ExoMars",
        tags: "missão marte esa roscosmos"
    },
    {
        titulo: "Peggy Whitson",
        descricao: "Astronauta americana que detém o recorde de mais dias passados no espaço por uma mulher.",
        link: "https://pt.wikipedia.org/wiki/Peggy_Whitson",
        tags: "astronauta americana recorde mulher"
    },
    {
        titulo: "SpaceX Starship",
        descricao: "Foguete de próxima geração da SpaceX projetado para viagens à Lua e Marte.",
        link: "https://pt.wikipedia.org/wiki/SpaceX_Starship",
        tags: "foguete spacex lua marte"
    },
    {
        titulo: "Chandrayaan-2",
        descricao: "Missão lunar indiana lançada em 2019.",
        link: "https://pt.wikipedia.org/wiki/Chandrayaan-2",
        tags: "missão lunar indiana"
    },
    {
        titulo: "Ingenuity",
        descricao: "Drone helicóptero que voou pela primeira vez em Marte em 2021.",
        link: "https://pt.wikipedia.org/wiki/Ingenuity_(helic%C3%B3ptero)",
        tags: "drone helicóptero marte"
    }
];
