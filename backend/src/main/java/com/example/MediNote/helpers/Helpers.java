package com.example.MediNote.helpers;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.stereotype.Component;


@Component
public class Helpers {

    // Método auxiliar para obtener los nombres de las propiedades nulas
    public String[] getNullPropertyNames(Object source, Set<String> excludeFields) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = Arrays.stream(pds)
                .filter(pd -> src.getPropertyValue(pd.getName()) == null)
                .map(java.beans.PropertyDescriptor::getName)
                .filter(name -> !excludeFields.contains(name))
                .collect(Collectors.toSet());
                
        return emptyNames.toArray(new String[0]);
    }
}
