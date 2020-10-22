function saveOrphanage(db, orphanage){
    db.run(`
        INSERT INTO orphanages (
            name,
            lat,
            lng,
            about,
            wpp,
            images,
            instructions,
            visit_hours,
            visit_on_weekends
        ) VALUES (
            "${orphanage.name}",
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.about}",
            "${orphanage.wpp}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.visitHour}",
            "${orphanage.visitOnWeekends}"
        );
    `)
}


module.exports = saveOrphanage;