package com.maram.livres;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maram.livres.entities.Genre;
import com.maram.livres.entities.Livre;
import com.maram.livres.repos.GenreRepository;
import com.maram.livres.repos.LivreRepository;

@SpringBootTest
class LivresApplicationTests {

	@Autowired

	private LivreRepository livreRepository;
	@Autowired
	private GenreRepository genreRepository;
	@Test
	public void testCreateLivre() {
		Genre genre  = new Genre();
				genre.setNomgenre("horror");
				genreRepository.save(genre);
	Livre liv= new Livre("shining","stephen king",900,new Date());
	liv.setGenre(genre);
	livreRepository.save(liv);
	}
	@Test
	public void testFindLivre()
	{
	Livre l = livreRepository.findById(12L).get(); 
	System.out.println(l);
	}
	@Test 
	public void testUpdateLivre()
	{
	Livre l = livreRepository.findById(12L).get();
	l.setNbpages(800);
	livreRepository.save(l);
	}
	@Test
	public void testDeleteLivre()
	{
	livreRepository.deleteById(13L);
	}
	@Test
	public void testListerTousLivres()
	{
	List<Livre> livs = livreRepository.findAll();
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testFindLivreByTitre()
	{
	List <Livre> livres= livreRepository.findByTitre("shining"); 
	for (Livre l : livres)
	{
	System.out.println(l.getTitre());
	}
	}
	@Test
	public void testFindByTitreContains()
	{
	List<Livre> livres=livreRepository.findByTitreContains("shi");
	for (Livre l : livres)
	{
	System.out.println(l);
	} 
	}
	@Test
	public void testFindByTitreNbpages()
	{
	List<Livre> livs = livreRepository.findByTitreNbpages("kafka on the shore",1000);
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testFindByGenre()
	{
	Genre gen = new Genre();
	gen.setIdgenre(1L);
	List<Livre> livs = livreRepository.findByGenre(gen);
	for (Livre l :livs)
	{
	System.out.println(l);
	}
	}
	/*@Test
	public void testFindByGenreIdGenre()
	{
	List<Livre> livs = livreRepository.findByGenreIdGenre(4L);
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	 }*/
	
	@Test
	public void testFindByOrderByTitreAsc()
	{
	List<Livre> livs = 
	livreRepository.findByOrderByTitreAsc();
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testTrierLivresNbpages()
	{
	List<Livre> livs = livreRepository.trierLivreTitresNbpages();
	for (Livre l: livs)
	{
	System.out.println(l);
	}
	}




	
}
