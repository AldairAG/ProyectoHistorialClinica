package com.example.MediNote.constants;

public class ERROR_MESSAGES{
     // Errores generales
     public static final String CAMPO_VACIO = "Este campo no puede estar vacío.";
     public static final String FORMATO_INVALIDO = "El formato del campo no es válido.";
     public static final String VALOR_NO_PERMITIDO = "El valor ingresado no está permitido.";
 
     // Errores relacionados con usuarios
     public static final String USUARIO_YA_EXISTE = "El nombre de usuario ya está registrado.";
     public static final String EMAIL_YA_EXISTE = "El correo electrónico ya está registrado.";
     public static final String CONTRASENA_INVALIDA = "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.";
     public static final String CEDULA_INVALIDA = "La cédula debe contener exactamente 8 dígitos.";
     public static final String ROL_INVALIDO = "El rol especificado no es válido.";
 
     // Errores relacionados con autenticación
     public static final String CREDENCIALES_INVALIDAS = "Las credenciales ingresadas son incorrectas.";
     public static final String USUARIO_NO_ENCONTRADO = "El usuario no existe.";
     public static final String SESION_EXPIRADA = "La sesión ha expirado. Por favor, inicia sesión nuevamente.";
 
     // Errores relacionados con datos médicos
     public static final String PACIENTE_NO_ENCONTRADO = "El paciente no fue encontrado.";
     public static final String DOCTOR_NO_ENCONTRADO = "El doctor no fue encontrado.";
     public static final String HISTORIA_CLINICA_NO_ENCONTRADA = "La historia clínica no fue encontrada.";
     public static final String NOTA_CLINICA_NO_ENCONTRADA = "La nota clínica no fue encontrada.";
     public static final String ARCHIVO_ADJUNTO_NO_ENCONTRADO = "El archivo adjunto no fue encontrado.";
 
     // Errores relacionados con fechas
     public static final String FECHA_INVALIDA = "La fecha ingresada no es válida.";
     public static final String FECHA_FUTURA_NO_PERMITIDA = "No se permiten fechas futuras.";
     public static final String FECHA_PASADA_NO_PERMITIDA = "No se permiten fechas pasadas.";
 
     // Errores relacionados con archivos
     public static final String ARCHIVO_NO_VALIDO = "El archivo no es válido. Solo se permiten archivos PDF o imágenes.";
     public static final String TAMANO_ARCHIVO_EXCEDIDO = "El tamaño del archivo excede el límite permitido (2MB).";
 
     // Errores relacionados con pagos
     public static final String PAGO_FALLIDO = "El pago no pudo ser procesado. Inténtalo nuevamente.";
     public static final String METODO_PAGO_NO_VALIDO = "El método de pago no es válido.";
 
     // Errores relacionados con membresías
     public static final String MEMBRESIA_NO_ACTIVA = "La membresía no está activa.";
     public static final String SUSCRIPCION_EXPIRADA = "La suscripción ha expirado.";
     public static final String RENOVACION_FALLIDA = "La renovación de la suscripción falló. Inténtalo nuevamente.";
 
     // Errores genéricos del sistema
     public static final String ERROR_INTERNO = "Ha ocurrido un error interno en el servidor. Por favor, inténtalo más tarde.";
     public static final String RECURSO_NO_ENCONTRADO = "El recurso solicitado no fue encontrado.";
     public static final String ACCESO_DENEGADO = "No tienes permisos para realizar esta acción.";
}