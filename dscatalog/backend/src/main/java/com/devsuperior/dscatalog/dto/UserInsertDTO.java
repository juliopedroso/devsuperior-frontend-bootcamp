package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.services.validation.UserInsertValid;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
@UserInsertValid
public class UserInsertDTO extends UserDTO {

    private static final long serialVersionUID = 1L;
    
    private String password;

}
