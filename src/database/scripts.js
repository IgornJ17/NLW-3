const DataBase = require('./db');
const saveOrphanage = require('./saveOrphanage.js')

DataBase.then(async (db) => {
    await saveOrphanage(db, {
        name: "Lar Anália Franco",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: ["/images/lar_analia_1.jpg", "/images/lar_analia_2.jpg", "/images/lar_analia_3.jpg", 
        "/images/lar_analia_4.jpg", "/images/lar_analia_5.jpg", "/images/lar_analia_6.jpg"],
        lat: "-22.9052436",
        lng: "-43.2485414",
        wpp:"(21) 2281-1000",
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        visitHour: "Horário de visitas Das 18h até 8h",
        visitOnWeekends: 0
    })

    await saveOrphanage(db, {
        name: "Lar de Maria Dolores",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: ["/images/lar_dolores1.jpg", "/images/lar_dolores2.jpg", "/images/lar_dolores3.jpg", 
        "/images/lar_dolores4.jpg", "/images/lar_dolores5.jpg", "/images/lar_dolores6.jpg"],
        lat: "-22.913363", 
        lng: "-43.2542047",
        wpp: "(21) 97031-1837",
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        visitHour: "Horário de visitas Das 17h até 8h",
        visitOnWeekends: 1
    })

    //const selectedOrphanageAll = await db.all(" SELECT * FROM orphanages")
    //console.log(selectedOrphanageAll)

    //const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')

    //await db.run('DELETE FROM orphanages WHERE id = ""')

    const selectedOrphanageAll = await db.all(" SELECT * FROM orphanages")
    console.log(selectedOrphanageAll)
})