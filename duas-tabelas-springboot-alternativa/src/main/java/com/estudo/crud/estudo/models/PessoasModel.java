package com.estudo.crud.estudo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PessoasModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String nome;
    public String sobrenome;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "documento_id", referencedColumnName = "id")
    public DocumentosModel documentosModel;
}
