export const KEYS_DB = {
    TENSION_ARTERIAL: 'tensionArterial',
    FRECEUCNIA_RESPIRATORIA: 'frecuenciaRespiratoria',
    FRECEUCNIA_CARDIACA: 'frecuenciaCardiaca',
    SATURACION_O: 'saturacionOxigeno',
    ALTURA: 'altura',
    TEMPERATURA: 'temperatura',
    PESO: 'peso',
    ///////
    ESTADO_NEUROLOGICO: 'estdNeurologico',
    EXPLORACION_SUPERIOR: 'exploracionSuperior',
    ABDOMEN: 'abdomen',
    EXTREMIDADES: 'extremidades',
    PIEL: 'piel',
    TORAX: 'torax',
    GENITALES: 'genitales',
    //////
    IMPRESION_DIAGNOSTICA: "impresionDiagnostica",
    ANALISIS_PLAN: "analisisPlan",

    PADECIMIENTO_ACTUAL: "padecimientoActual",

    SINTOMAS: {
        // Síntomas generales
        GENERALES: {
            FIEBRE: "fiebre",
            ASTENIA: "astenia",
            ADINAMIA: "adinamia",
            NAUSEA: "nausea",
            VOMITO: "vomito",
            PERDIDA_PESO: "perdidaPeso",
            CEFÁLEA: "cefalea",
        },
        // Aparato digestivo
        DIGESTIVO: {
            HALITOSIS: "halitosis",
            BOCA_SECA: "bocaSeca",
            DISFAGIA: "disfagia",
            ODINOFAGIA: "odinofagia",
            PIROSIS: "pirosis",
            MELENA: "melena",
            HEMATEMESIS: "hematemesis",
            FLATULENCIAS: "flatulensias",
            DIARREA: "diarrea",
            RECTORRAGIA: "rectorragia",
            ESTREÑIMIENTO: "estrinimiento",
            TENESMO: "tenesmo",
            ACOLIA: "acolia",
            METEORISMO: "meteorismo",
        },
        // Aparato respiratorio
        RESPIRATORIO: {
            DISNEA: "disnea",
            TOS: "tos",
            DISFONIA: "disfonia",
            ATONIA: "atonia",
            CIANOSIS: "cianosis",
            APNEA_SUENO: "apneaSueno",
            RINORREA: "rinorrea",
            RONQUERA: "ronquera",
            CONGESTION_NASAL: "congestionNasal",
            EPISTAXIS: "epistaxis",
        },
        // Aparato cardiovascular
        CARDIOVASCULAR: {
            DOLOR_TORACICO: "dolorToracico",
            SINCOPE: "sincope",
            PALPITACIONES: "palpitaciones",
            DIAFORESIS: "diatoresis",
            FATIGA: "fatiga",
            EDEMA: "edema",
            ANSIEDAD: "ansiedad",
            DESMAYOS: "desmayos",
        },
        //sistema urinario
        URINARIO: {
            INCONTINENCIA: "incontinencia",
            DISURIA: "disuria",
            TENESMO_VESICAL: "tenesmo",
            HEMATURIA: "hematuria",
            COLURIA: "coluria",
            QUILURIA: "quiluria",
            POLIURIA: "poliuria",
            ANURIA: "anuria",
            NICTURIA: "nicturia",
            INTERMITENCIA_CHORRO: "intermitenciaChorro",
            URGENCIA_MICCIONAL: "urgencia",
            CHORRO_DEBIL: "chorroDebil",
            POLAQUIURIA: "polaquiuria",

        },
        // Sistema nervioso
        NERVIOSO: {
            VERTIGO: "vertigo",
            PARESIA: "paresia",
            DISESTESIAS: "disestesias",
            PARALISIS: "paralisis",
            MOVIMIENTOS_ANORMALES: "movimientoAnormales",
            VISION_BORROSA: "visionBorrosa",
            AMAUROSIS: "amaurosis",
            DOLOR_MUSCULAR: "dolorMuscular",
            ANESTESIA: "anestesia",
            HIPOESTESIA: "hipoestemia",
            HIPERESTESIA: "hiperestesia",
            HIPOACUSIA: "hipoacusia",
            ANOSMIA: "anosmia",
            ALTERACION_GUSTO: "alteracionGusto",

        },
        // Sistema endocrino
        ENDOCRINO: {
            INTOLERANCIA_FRIO: "intoleraciaFrio",
            INTOLERANCIA_CALOR: "intoleraciaCalor",
            LETARGIA: "letargia",
            POLIDIPSIA: "polidipsia",
            POLIFAGIA: "polifagia",
            BRADIPSIQUIA: "bradipsiquia",
            BRADILALIA: "bradilalia",
            TAQUICARDIA: "taquicardia",

        },
        // Sistema musculoesquelético
        MUSCULOESQUELETICO: {
            MIALGIAS: "mialgias",
            ARTRALGIAS: "artralgias",
            CREPITACION: "crepitacion",
            DEBILIDAD_MUSCULAR: "debilidadMuscular",
            DEFORMIDAD: "deformidad",
            DISMINUCION_MOVILIDAD: "disminucionMovilidad",
            DIFICULTAD_DEAMBULACION: "dificultadDeambulacion",

        },
        // Sistema hematológico
        HEMATOFAGICO: {
            PETEQUIAS: "petequias",
            EQUIMOSIS: "equimosis",
            HEMORRAGIAS: "hemorragias",
            LIPOTIMIA: "lipotimia",

        },
        // Sistema  psiquiátrico
        PSIQUIATRICO: {
            DELIRIO: "delirio",
            ALUCINACIONES: "alucinaciones",
            HIPERSOMNIA: "hipersomnia",
            INSOMNIO: "insomnio",
            DEPRESION: "depresion",
            FOBIAS: "fobias",
            TOC: "toc",
            ALTERACIONES_PENSAMIENTO: "alteracionesPensamiento",
            PENSAMIENTO_SUICIDA: "pensamientoSuicida",
        }
    }
}

export const SINTOMAS = {
    // Síntomas generales
    GENERALES: [
        "fiebre",
        "astenia",
        "adinamia",
        "nausea",
        "vomito",
        "perdidaPeso",
        "cefalea",
    ],
    // Aparato digestivo
    DIGESTIVO: [
        "halitosis",
        "bocaSeca",
        "disfagia",
        "odinofagia",
        "pirosis",
        "melena",
        "hematemesis",
        "flatulensias",
        "diarrea",
        "rectorragia",
        "estrinimiento",
        "tenesmo",
        "acolia",
        "meteorismo",
    ],
    // Aparato respiratorio
    RESPIRATORIO: [
        "disnea",
        "tos",
        "disfonia",
        "atonia",
        "cianosis",
        "apneaSueno",
        "rinorrea",
        "ronquera",
        "congestionNasal",
        "epistaxis",
    ],
    // Aparato cardiovascular
    CARDIOVASCULAR: [
        "dolorToracico",
        "sincope",
        "palpitaciones",
        "diatoresis",
        "fatiga",
        "edema",
        "ansiedad",
        "desmayos",
    ],
    //sistema urinario
    URINARIO: [
        "incontinencia",
        "disuria",
        "tenesmo",
        "hematuria",
        "coluria",
        "quiluria",
        "poliuria",
        "anuria",
        "nicturia",
        "intermitenciaChorro",
        "urgencia",
        "chorroDebil",
        "polaquiuria",

    ],
    // Sistema nervioso
    NERVIOSO: [
        "vertigo",
        "paresia",
        "disestesias",
        "paralisis",
        "movimientoAnormales",
        "visionBorrosa",
        "amaurosis",
        "dolorMuscular",
        "anestesia",
        "hipoestemia",
        "hiperestesia",
        "hipoacusia",
        "anosmia",
        "alteracionGusto",

    ],
    // Sistema endocrino
    ENDOCRINO: [
        "intoleraciaFrio",
        "intoleraciaCalor",
        "letargia",
        "polidipsia",
        "polifagia",
        "bradipsiquia",
        "bradilalia",
        "taquicardia",

    ],
    // Sistema musculoesquelético
    MUSCULOESQUELETICO: [
        "mialgias",
        "artralgias",
        "crepitacion",
        "debilidadMuscular",
        "deformidad",
        "disminucionMovilidad",
        "dificultadAmbulacion",

    ],
    // Sistema hematológico
    HEMATOFAGICO: [
        "petequias",
        "equimosis",
        "hemorragias",
        "lipotimia",

    ],
    // Sistema  psiquiátrico
    PSIQUIATRICO: [
        "delirio",
        "alucinaciones",
        "hipersomnia",
        "insomnio",
        "depresion",
        "fobias",
        "toc",
        "alteracionesPensamiento",
        "pensamientoSuicida",
    ]
}