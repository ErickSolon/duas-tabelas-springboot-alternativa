package com.estudo.crud.estudo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentosModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String cpf;
}
