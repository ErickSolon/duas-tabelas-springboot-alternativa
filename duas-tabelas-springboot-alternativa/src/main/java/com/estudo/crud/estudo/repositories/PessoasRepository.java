package com.estudo.crud.estudo.repositories;

import com.estudo.crud.estudo.models.PessoasModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoasRepository extends JpaRepository<PessoasModel, Long> {
}
